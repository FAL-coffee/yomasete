import { useEffect, useState } from 'react'

import { supabase } from '../config/supabase'
import { User } from '../types'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      console.log('session:', session)
      if (session?.user) {
        // 既存のユーザー情報を custom users テーブルから取得
        const { error: fetchError } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle()
        if (fetchError) {
          console.error('Error fetching user:', fetchError)
        }

        const userData: User = {
          id: session.user.id,
          email: session.user.email!,
          created_at: session.user.created_at,
          username: session.user.user_metadata.username,
        }
        setUser(userData)
      }
      setLoading(false)
    }

    initSession()

    // 認証状態の変化を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          // ユーザーが custom users テーブルに存在するかチェック
          const { data: existingUser, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle()
          if (fetchError) {
            console.error('Error fetching user:', fetchError)
          }
          if (!existingUser) {
            const { error: insertError } = await supabase
              .from('users')
              .insert({
                id: session.user.id,
                email: session.user.email,
                name: session.user.user_metadata?.username || '',
                profile_image: '',
                created_at: session.user.created_at,
                updated_at: session.user.created_at,
              })
            if (insertError) {
              console.error('Error inserting user:', insertError)
            }
          }
          const userData: User = {
            id: session.user.id,
            email: session.user.email!,
            created_at: session.user.created_at,
            username: session.user.user_metadata.username,
          }
          setUser(userData)
        }
        else {
          setUser(null)
        }
        setLoading(false)
      },
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
    }
    catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const updateProfile = async (username: string) => {
    try {
      const { data: { user: updatedUser }, error } = await supabase.auth.updateUser({
        data: { username },
      })

      if (error) throw error

      if (updatedUser) {
        const userData: User = {
          id: updatedUser.id,
          email: updatedUser.email!,
          created_at: updatedUser.created_at,
          username: updatedUser.user_metadata.username,
        }
        setUser(userData)
      }
    }
    catch (error) {
      console.error('Error updating profile:', error)
      throw error
    }
  }

  return {
    user,
    loading,
    signOut,
    updateProfile,
  }
}

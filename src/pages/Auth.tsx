// src/pages/Auth.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Root as FormRoot, Field } from '@radix-ui/react-form'
import { Button, Container, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { supabase } from '../config/supabase'

export const Auth: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw error

        // ユーザー認証に成功したら、カスタムの users テーブルにユーザー情報を挿入
        if (data.user) {
          const { error: insertError } = await supabase
            .from('users')
            .insert({
              id: data.user.id, // Supabase Auth のユーザーIDを使用
              email: data.user.email,
              name: data.user.user_metadata?.username || '', // ユーザー名があれば使用
              profile_image: '', // デフォルト値や空文字など
              created_at: data.user.created_at,
              updated_at: data.user.created_at
            })
          
          if (insertError) {
            console.error('Error inserting user into table:', insertError)
          }
        }

        alert('確認リンクをメールで送信しました。メールをチェックしてください！')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        navigate('/')
      }
    } catch (error) {
      console.error('Authentication error:', error)
      alert(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
    } catch (error) {
      console.error('Google sign in error:', error)
      alert(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <Container size="1">
      <Flex direction="column" gap="4" style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
        <Heading size="6" align="center">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </Heading>
        
        <FormRoot onSubmit={handleSubmit}>
          <Flex direction="column" gap="3">
            <Field name="email">
              <TextField.Root
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required>
              </TextField.Root>
            </Field>

            <Field name="password">
              <TextField.Root
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required>
              </TextField.Root>
            </Field>

            <Button type="submit" disabled={loading}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </Flex>
        </FormRoot>

        <Button onClick={handleGoogleSignIn} variant="soft">
          Sign in with Google
        </Button>

        <Text align="center">
          <Button
            variant="ghost"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </Button>
        </Text>
      </Flex>
    </Container>
  )
}

export default Auth

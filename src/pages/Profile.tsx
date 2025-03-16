import { Button, TextField } from '@radix-ui/themes'
import { useCallback, useEffect, useState } from 'react'

import { BookCard } from '../components/BookCard'
import { supabase } from '../config/supabase'
import { useAuth } from '../hooks/useAuth'
import * as styles from '../styles/theme.css'
import { Book } from '../types'

export const Profile = () => {
  const { user, updateProfile } = useAuth()
  const [username, setUsername] = useState(user?.username || '')
  const [myBooks, setMyBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)

  const fetchMyBooks = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('owner_id', user?.id)

      if (error) throw error
      setMyBooks(data as Book[])
    }
    catch (error) {
      console.error('Error fetching books:', error)
    }
  }, [user?.id])

  useEffect(() => {
    fetchMyBooks()
  }, [fetchMyBooks])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await updateProfile(username)
      alert('Profile updated successfully!')
    }
    catch (error) {
      console.error('Error updating profile:', error)
      alert('Failed to update profile')
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Profile</h1>

      <form onSubmit={handleUpdateProfile} style={{ maxWidth: '400px', margin: '2rem 0' }}>
        <TextField.Root
          required
          onChange={e => setUsername(e.target.value)}
          placeholder='Username'
          value={username}
        />
        <Button disabled={loading} style={{ marginTop: '1rem' }} type='submit'>
          Update Profile
        </Button>
      </form>

      <h2>My Books</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {myBooks.map(book => (
          <BookCard book={book} isOwner={true} key={book.id} />
        ))}
      </div>
    </div>
  )
}

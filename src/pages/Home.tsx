// src/pages/Home.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@radix-ui/themes'
import { useAuth } from '../hooks/useAuth'
import * as styles from '../styles/theme.css'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1>Welcome to yomasete</h1>
      <p>Share books within your community, safely and easily.</p>
      
      {user ? (
        <div className={styles.actions}>
          <Button onClick={() => navigate('/communities')}>
            Browse Communities
          </Button>
          <Button onClick={() => navigate('/books/register')}>
            Register a Book
          </Button>
        </div>
      ) : (
        <Button onClick={() => navigate('/auth')}>
          Get Started
        </Button>
      )}
    </div>
  )
}
import { Field, Root as FormRoot } from '@radix-ui/react-form'
import { Button, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { supabase } from '../config/supabase'
import * as styles from './Signin.css.ts'

export const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      navigate('/')
    }
    catch (error) {
      console.error('Authentication error:', error)
      alert(error instanceof Error ? error.message : 'An error occurred')
    }
    finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
    }
    catch (error) {
      console.error('Google sign in error:', error)
      alert(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <main className={styles.main}>
      <Flex className={styles.formWrapper} direction='column' gap='4'>
        <Heading align='center' className={styles.heading} size='6'>
          ログイン
        </Heading>

        <FormRoot className={styles.form} onSubmit={handleSubmit}>
          <Flex direction='column' gap='3'>
            <Field name='email'>
              <TextField.Root
                required
                className={styles.input}
                onChange={e => setEmail(e.target.value)}
                placeholder='メールアドレス'
                type='email'
                value={email}
              />
            </Field>
            <Field name='password'>
              <TextField.Root
                required
                className={styles.input}
                onChange={e => setPassword(e.target.value)}
                placeholder='パスワード'
                type='password'
                value={password}
              />
            </Field>
            <Button className={styles.submitButton} disabled={loading} type='submit'>
              ログイン
            </Button>
          </Flex>
        </FormRoot>

        <Button className={styles.googleButton} onClick={handleGoogleSignIn} variant='soft'>
          Googleでログイン
        </Button>

        <Text align='center' className={styles.text}>
          アカウントをお持ちでない方は
          {' '}
          <Button asChild className={styles.link} variant='ghost'>
            <Link to='/signup'>アカウント登録</Link>
          </Button>
        </Text>
      </Flex>
    </main>
  )
}

export default Signin

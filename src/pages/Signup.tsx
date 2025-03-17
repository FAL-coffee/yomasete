import { Field, Root as FormRoot } from '@radix-ui/react-form'
import { Button, Checkbox, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { supabase } from '../config/supabase'
import * as styles from './Signup.css.ts'

export const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert('パスワードが一致しません')
      return
    }
    if (!agreeTerms) {
      alert('利用規約とプライバシーポリシーに同意してください')
      return
    }
    setLoading(true)
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name,
          },
        },
      })
      if (error) throw error

      alert('確認リンクをメールで送信しました。メールをチェックしてください！')

      navigate('/')
    }
    catch (error) {
      console.error('Signup error:', error)
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
          アカウント作成
        </Heading>

        <FormRoot className={styles.form} onSubmit={handleSubmit}>
          <Flex direction='column' gap='3'>
            <Field name='name'>
              <TextField.Root
                required
                autoComplete='name'
                className={styles.input}
                onChange={e => setName(e.target.value)}
                placeholder='お名前'
                value={name}
              />
            </Field>
            <Field name='email'>
              <TextField.Root
                required
                autoComplete='email'
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
                autoComplete='new-password'
                className={styles.input}
                onChange={e => setPassword(e.target.value)}
                placeholder='パスワード'
                type='password'
                value={password}
              />
            </Field>
            <Field name='password-confirm'>
              <TextField.Root
                required
                autoComplete='new-password'
                className={styles.input}
                onChange={e => setPasswordConfirm(e.target.value)}
                placeholder='パスワード（確認）'
                type='password'
                value={passwordConfirm}
              />
            </Field>
            <Field name='terms'>
              <Flex align='center' direction='row' gap='2'>
                <Checkbox
                  checked={agreeTerms}
                  onClick={() => setAgreeTerms(!agreeTerms)}
                />
                <Text>
                  <Link className={styles.link} to='/terms'>利用規約</Link>
                  {' '}
                  と
                  {' '}
                  <Link className={styles.link} to='/privacy'>プライバシーポリシー</Link>
                  {' '}
                  に同意します
                </Text>
              </Flex>
            </Field>
            <Button className={styles.submitButton} disabled={loading} type='submit'>
              アカウント作成
            </Button>
          </Flex>
        </FormRoot>

        <Button className={styles.googleButton} onClick={handleGoogleSignIn} variant='soft'>
          Googleでログイン
        </Button>

        <Text align='center' className={styles.text}>
          すでにアカウントをお持ちの方は
          {' '}
          <Button asChild className={styles.link} variant='ghost'>
            <Link to='/signin'>ログイン</Link>
          </Button>
        </Text>
      </Flex>
    </main>
  )
}

export default Signup

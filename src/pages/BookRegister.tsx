// src/pages/BookRegister.tsx
import React, { useState, useRef, useEffect } from 'react'
import { Button, TextField } from '@radix-ui/themes'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../config/supabase'
import { searchBookByISBN } from '../utils/books'
import * as styles from '../styles/theme.css'
import Quagga from 'quagga'

// Quaggaの検出結果の型定義（必要に応じて拡張してください）
interface CodeResult {
  code: string
  format: string
  error?: number
}

interface QuaggaJSResultObject {
  codeResult: CodeResult
  // 他のプロパティがあれば追記
}

export const BookRegister: React.FC = () => {
  const { user } = useAuth()
  const [isbn, setIsbn] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [scanning, setScanning] = useState<boolean>(false)
  const scannerRef = useRef<HTMLDivElement>(null)

  // バーコードスキャン開始
  const handleBarcodeScan = (): void => {
    setError('')
    setScanning(true)
  }

  // スキャン停止処理
  const stopScanner = (): void => {
    Quagga.stop()
    setScanning(false)
  }

  // Quaggaの初期化とバーコード検出の設定
  useEffect(() => {
    if (scanning && scannerRef.current) {
      Quagga.init({
        inputStream: {
          type: 'LiveStream',
          target: scannerRef.current,
          constraints: {
            facingMode: 'environment'
          }
        },
        decoder: {
          // ISBNは一般的にEAN-13形式のバーコードです
          readers: ['ean_reader']
        }
      }, (err: Error | null) => {
        if (err) {
          console.error('Quaggaの初期化エラー:', err)
          setError('バーコードスキャナーの初期化に失敗しました')
          setScanning(false)
          return
        }
        Quagga.start()
      })

      // バーコードが検出されたらISBNにセット
      Quagga.onDetected((result: QuaggaJSResultObject) => {
        if (result && result.codeResult && result.codeResult.code) {
          setIsbn(result.codeResult.code)
          stopScanner()
        }
      })
    }

    // クリーンアップ
    return () => {
      if (scanning) {
        Quagga.offDetected(() => {})
        Quagga.stop()
      }
    }
  }, [scanning])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const bookData = await searchBookByISBN(isbn)
      
      if (!bookData) {
        setError('書籍が見つかりませんでした')
        return
      }

      const { error: dbError } = await supabase
        .from('books')
        .insert({
          isbn,
          title: bookData.title,
          author: bookData.author,
          cover_url: bookData.coverUrl,
          owner_id: user?.id,
          status: 'available'
        })

      if (dbError) throw dbError

      // フォームをリセット
      setIsbn('')
      alert('書籍登録に成功しました！')
    } catch (err) {
      console.error('書籍登録エラー:', err)
      setError('書籍の登録に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Register a Book</h1>

      <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <Button onClick={handleBarcodeScan} style={{ marginBottom: '1rem', width: '100%' }}>
          Scan Barcode
        </Button>

        <form onSubmit={handleSubmit}>
          <TextField.Root
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
          
          {error && (
            <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
          )}

          <Button type="submit" disabled={loading} style={{ marginTop: '1rem', width: '100%' }}>
            {loading ? '登録中…' : 'Register Book'}
          </Button>
        </form>
      </div>

      {scanning && (
        <div className={styles.scannerModal}>
          {/* Quaggaがカメラ映像をここに表示 */}
          <div ref={scannerRef} style={{ width: '100%', height: '300px' }} />
          <Button onClick={stopScanner} style={{ marginTop: '1rem' }}>
            スキャンを閉じる
          </Button>
        </div>
      )}
    </div>
  )
}

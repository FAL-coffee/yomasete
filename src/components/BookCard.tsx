// src/components/BookCard.tsx
import React from 'react'
import { Card, Text, Button } from '@radix-ui/themes'
import { Book } from '../types'

interface BookCardProps {
  book: Book
  onBorrow?: () => void
  onReturn?: () => void
  isOwner?: boolean
}

export const BookCard: React.FC<BookCardProps> = ({ book, onBorrow, onReturn, isOwner }) => {
  const getStatusLabel = () => {
    switch (book.status) {
      case 'available':
        return '貸出可能'
      case 'borrowed':
        return '貸出中'
      case 'pending':
        return '手続き中'
      default:
        return book.status
    }
  }

  return (
    <Card style={{ maxWidth: '300px' }}>
      <img
        src={book.cover_url}
        alt={book.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <Text size="3" weight="bold">
          {book.title}
        </Text>
        <Text as="p" size="2" color="gray">
          {book.author}
        </Text>
        <Text as="p" size="2" style={{ marginTop: '0.5rem' }}>
          Status: {getStatusLabel()}
        </Text>
        
        {!isOwner && book.status === 'available' && onBorrow && (
          <Button onClick={onBorrow} style={{ marginTop: '1rem' }}>
            借りる
          </Button>
        )}
        
        {!isOwner && book.status === 'borrowed' && onReturn && (
          <Button onClick={onReturn} style={{ marginTop: '1rem' }}>
            返却
          </Button>
        )}
      </div>
    </Card>
  )
}
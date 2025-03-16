export interface User {
  id: string
  email: string
  created_at: string
  username?: string
}

export interface Community {
  id: string
  name: string
  description: string
  max_members: number
  created_by: string
  created_at: string
}

export interface Book {
  id: string
  isbn: string
  title: string
  author: string
  cover_url: string
  owner_id: string
  community_id: string
  status: 'available' | 'borrowed' | 'pending'
  created_at: string
}

export interface Transaction {
  id: string
  book_id: string
  borrower_id: string
  status: 'pending' | 'accepted' | 'shipping' | 'borrowed' | 'returning' | 'completed'
  shipping_tracking_id?: string
  created_at: string
  return_by?: string
}

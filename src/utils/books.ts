// src/utils/books.ts
interface BookData {
  title: string
  author: string
  coverUrl: string
  description?: string
}

export const searchBookByISBN = async (isbn: string): Promise<BookData | null> => {
  try {
    // Using Google Books API
    const apiKey = 'AIzaSyCL5YqyKqYQ16QtdFHUlNnSmW_27r8TcBU'
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`)
    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      return null
    }

    const book = data.items[0].volumeInfo
    return {
      title: book.title,
      author: book.authors ? book.authors.join(', ') : 'Unknown',
      coverUrl: book.imageLinks?.thumbnail || '',
      description: book.description
    }
  } catch (error) {
    console.error('Error fetching book data:', error)
    return null
  }
}
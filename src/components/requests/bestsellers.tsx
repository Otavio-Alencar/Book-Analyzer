import { fetchBooks } from '@/lib/nytBooks'

export const BestSellers = async () => {
  const booksData = await fetchBooks({ listName: 'hardcover-fiction' })
  console.log(booksData)
  return <div></div>
}

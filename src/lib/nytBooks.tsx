import axios from 'axios'

type Props = {
  listName: string
}
export const fetchBooks = async ({ listName }: Props) => {
  const NYT_API_KEY = process.env.NYT_API_KEY
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${NYT_API_KEY}`

  try {
    const response = await axios.get(url)
    const content = response.data
    return content
  } catch (error) {
    console.error('Error fetching data from NYT API:', error)
    return null
  }
}

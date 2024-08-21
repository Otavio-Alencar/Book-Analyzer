import axios from 'axios'

const NYT_API_KEY = process.env.NYT_API_KEY
type Props = {
  listName: string
}
export const fetchBooks = async ({ listName }: Props) => {
  const url = `https://api.nytimes.com/svc/books/v3/lists/${listName}.json?api-key=${NYT_API_KEY}`

  try {
    const response = await axios.get(url)
    console.log(response.data)
    return [response.data]
  } catch (error) {
    console.error('Error fetching data from NYT API:', error)
    return null
  }
}

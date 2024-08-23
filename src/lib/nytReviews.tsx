import axios from 'axios'

type Props = {
  isbn: string
}
export const fetchReviews = async ({ isbn }: Props) => {
  const NYT_API_KEY = process.env.NYT_API_KEY
  const url = `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${isbn}&api-key=${NYT_API_KEY}`
  try {
    const response = await axios.get(url)
    const content = response.data

    return content
  } catch (error) {
    return { results: { byline: 's' } }
  }
}

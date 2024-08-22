import { fetchReviews } from '@/lib/nytReviews'

type Props = {
  params: {
    isbn: string
  }
}

const Page = async ({ params }: Props) => {
  const review = await fetchReviews({ isbn: params.isbn })
  return (
    <div>
      {review.status === 'OK' ? (
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div>{review.results[0].byline}</div>
        </div>
      ) : (
        'Review not found'
      )}
    </div>
  )
}

export default Page

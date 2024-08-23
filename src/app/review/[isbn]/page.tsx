import { ExitLink } from '@/components/exitlink'
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
          <div className="flex max-h-96 min-h-56 w-full flex-col items-center justify-center gap-10">
            <div className="mt-10 flex flex-col items-center">
              <h1 className="text-3xl font-bold">
                {review.results[0].book_title}
              </h1>
              <p className="text-sm font-light">{review.results[0].byline}</p>
              <p className="text-sm font-light">
                Publicated in {review.results[0].publication_dt}
              </p>
            </div>
            <p className="text-center">{review.results[0].summary}</p>
            <div>
              <ExitLink />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-10 flex w-full flex-col items-center justify-center">
          <p>Review not found</p>
          <ExitLink />
        </div>
      )}
    </div>
  )
}

export default Page

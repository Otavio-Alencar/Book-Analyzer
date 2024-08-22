import { fetchBooks } from '@/lib/nytBooks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

type Props = {
  listname:
    | 'hardcover-fiction'
    | 'hardcover-nonfiction'
    | 'e-book-fiction'
    | 'e-book-nonfiction'
    | 'picture-books'
    | 'young-adult-hardcover'
}
export const BestSellers = async ({ listname }: Props) => {
  const Books = await fetchBooks({ listName: listname })

  return (
    <div className="w-full">
      <Carousel>
        <h1 className="mb-4 text-xl font-bold md:text-3xl">
          {Books.results.list_name}
        </h1>
        <CarouselContent className="">
          {Books.results.books.map((item) => (
            <CarouselItem
              key={item.rank}
              className="flex basis-1/2 flex-col gap-4 rounded-md border-r md:basis-1/4 lg:basis-1/4"
            >
              <div>
                <div>{item.rank}</div>
                <div className="flex items-center justify-center">
                  <img
                    src={item.book_image}
                    alt="book image"
                    className="max-h-48"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400">
                  {item.weeks_on_list} WEEKS ON THE LIST
                </p>
                <div className="font-bold">{item.title}</div>
                <p className="">By {item.author}</p>
              </div>
              <div className="hidden md:flex">
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="mb-2">
                <a
                  className="rounded-md bg-slate-500 px-4 py-2 text-white"
                  href={item.buy_links[0].url}
                >
                  Buy
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

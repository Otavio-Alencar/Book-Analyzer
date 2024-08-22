export type BuyLink = {
  name: string
  url: string
}

export type Book = {
  rank: number
  book_image: string
  weeks_on_list: number
  title: string
  author: string
  description: string
  buy_links: BuyLink[]
  primary_isbn10: string
}

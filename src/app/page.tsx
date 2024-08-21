import { Hero } from '@/components/sections/hero/hero'
import { headerLinks } from '@/data/headerLinks'

export const Page = () => {
  return (
    <div>
      <Hero className="container mt-10" links={{ data: headerLinks }} />
    </div>
  )
}

export default Page

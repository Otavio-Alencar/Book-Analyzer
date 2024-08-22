import { BestSellers } from '@/components/requests/bestsellers'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BestSellersList } from '@/data/bestsellerList'

type Props = {
  links: {
    data: {
      label: string
      href: string
    }[]
  }
}
export const TabsBook = ({ links }: Props) => {
  return (
    <Tabs defaultValue="Best Sellers">
      <TabsList className="flex items-center justify-start gap-5 bg-transparent px-0">
        {links.data.map((item) => (
          <TabsTrigger value={item.label} key={links.data.length}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator className="mb-5" />
      <TabsContent value="Best Sellers" className="flex flex-col gap-8">
        {BestSellersList.map((item) => (
          <BestSellers key={BestSellersList.length} listname={item.listname} />
        ))}
      </TabsContent>
    </Tabs>
  )
}

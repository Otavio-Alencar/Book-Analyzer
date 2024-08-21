'use client'

import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
      <Separator />
    </Tabs>
  )
}

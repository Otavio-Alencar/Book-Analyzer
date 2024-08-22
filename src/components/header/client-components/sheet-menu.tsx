'use client'

import { LinkButton } from '@/components/linkbutton'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { MenuIcon } from 'lucide-react'

type Props = {
  links: {
    data: {
      label: string
      href: string
    }[]
  }
}
export const SheetMenu = ({ links }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="flex h-full flex-col items-center justify-center gap-4 py-2 text-lg font-bold text-black">
          {links.data.map((item) => (
            <LinkButton key={item.href}>{item.label}</LinkButton>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

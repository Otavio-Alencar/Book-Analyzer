'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { MenuIcon } from 'lucide-react'

export const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="flex h-full flex-col items-center justify-center gap-4 py-2 text-lg font-bold text-black">
          <a target="_blank" href="https://www.nytimes.com/books/best-sellers/">
            Go to the original website
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}

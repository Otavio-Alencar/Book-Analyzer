import { cn } from '@/utils/cn'
import { heroProps } from '.'

import { TabsBook } from './client-components/tabsList'

export const Hero = ({ className, links }: heroProps) => {
  return (
    <div className={cn('bg-white', className)}>
      <div>
        <p className="text-sm font-semibold">BOOKS</p>
        <h1 className="text-xl font-semibold md:text-4xl">
          The New York Times Best Sellers
        </h1>
        <p className="text-xs text-slate-500 md:text-sm">
          Authoritatively ranked lists of books sold in the United States,
          sorted by format and genre.
        </p>
      </div>
      <div>
        <TabsBook links={links} />
      </div>
      <div></div>
    </div>
  )
}

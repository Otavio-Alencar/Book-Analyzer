import { cn } from '@/utils/cn'
import { heroProps } from '.'

import { TabsBook } from './client-components/tabsList'

export const Hero = ({ className, links }: heroProps) => {
  return (
    <div className={cn('bg-white', className)}>
      <div>
        <p>ARTS</p>
        <h1 className="text-3xl font-bold md:text-5xl">Book Review</h1>
      </div>
      <div>
        <TabsBook links={links} />
      </div>
      <div></div>
    </div>
  )
}

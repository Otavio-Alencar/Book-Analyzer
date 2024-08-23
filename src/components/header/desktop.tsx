import { cn } from '@/utils/cn'
import { HeaderProps } from '.'
import { DateFormat } from '@/utils/date'
import { SheetMenu } from './client-components/sheet-menu'

import { ProfileButton } from './client-components/profileButton'
export const Desktop = ({
  classname,
  logo,
  headerHeight,
}: HeaderProps & { headerHeight: string }) => {
  return (
    <header
      className={cn(
        'flex flex-col justify-center bg-white shadow-md',
        classname,
        headerHeight,
      )}
    >
      <div className="container m-auto flex h-full w-full items-center justify-between">
        <SheetMenu />

        {/* search */}
        <div className="hidden h-full w-72 items-center justify-start gap-5 lg:flex">
          {/* <Search /> */}
          <p className="whitespace-nowrap text-sm font-bold text-black">
            BOOKS REVIEW
          </p>
        </div>

        {/* logo and filter  */}
        <div className="max-h-[30px] md:max-h-[40px] lg:max-h-[60px]">
          {logo}
        </div>
        <ProfileButton />
        {/* date  */}
        <div className="hidden text-black lg:flex">
          <DateFormat />
        </div>
      </div>
    </header>
  )
}

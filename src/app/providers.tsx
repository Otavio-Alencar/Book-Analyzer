import { Header } from '@/components/header'
import { headerLinks } from '@/data/headerLinks'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Header
        classname=""
        logo={
          <img
            src="/logo.png"
            className="max-h-[25px] sm:max-h-[30px] md:max-h-[40px]"
            alt="logo new york times"
            sizes=""
          />
        }
        links={{ data: headerLinks }}
      />
      {children}
    </>
  )
}

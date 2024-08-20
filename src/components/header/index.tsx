import { Desktop } from './desktop'

export interface HeaderProps {
  classname?: string
  logo: JSX.Element
  links: {
    data: {
      label: string
      href: string
    }[]
  }
}

export function Header(props: HeaderProps) {
  const headerHeight = 'h-[60px] lg:h-[70px]'

  return (
    <>
      <Desktop {...props} headerHeight={headerHeight} />
    </>
  )
}

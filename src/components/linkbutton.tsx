import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
const button = tv({
  base: 'text-black relative ',
  variants: {
    active: {
      default:
        'after:content-[""] after:absolute after:bg-black after:w-[0%] after:h-[1px] after:bottom-0 after:left-0 hover:after:w-[100%] after:transition-all after:duration-300',
      true: 'border-1',
    },
  },
  defaultVariants: {
    active: 'default',
  },
})
export type LinkButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>

export const LinkButton = ({ active, ...props }: LinkButtonProps) => {
  return (
    <button className={button({ active })} {...props}>
      {props.children}
    </button>
  )
}

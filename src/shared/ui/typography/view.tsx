import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import { cva } from "class-variance-authority"

import { cx } from "../../utils/cx"

export type TypographyBase = HTMLAttributes<HTMLHeadingElement> &
  Variants & {
    className?: string
    children: ReactNode
    as?: "div" | "h1" | "h2" | "h3" | "h4" | "span"
    onClick?: MouseEventHandler<HTMLHeadingElement>
  }

type Variants = {
  variant?: "b1" | "b2" | "c1" | "c2" | "h1" | "h2" | "h3" | "h4" | "link"
} & (
  | {
      variant: "b1" | "b2" | "c1" | "c2" | "link"
      weight: "medium" | "regular"
    }
  | {
      variant: "h1" | "h2" | "h3" | "h4"
      weight: "bold" | "medium" | "regular"
    }
)

const variants = cva("", {
  variants: {
    variant: {
      h1: "text-[36px] md:text-5xl font-bold leading-tighter",
      h2: "text-2.5xl md:text-3xl font-bold md:leading-normal leading-9",
      h3: "text-xl md:text-2xl leading-normal",
      h4: "text-xl leading-normal",
      b1: "text-base",
      b2: "text-sm",
      link: "text-sm",
      c1: "text-xs leading-normal",
      c2: "text-xs leading-normal",
    },
    weight: {
      regular: "font-normal",
      bold: "font-bold",
      medium: "font-semibold",
    },
  },
})

export const Typography = (props: TypographyBase) => {
  const {
    onClick,
    children,
    className,
    variant = "h1",
    weight = "regular",
    as: Component = "h1",
    ...restProps
  } = props

  return (
    <Component
      className={cx(variants({ variant, weight, className }))}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Component>
  )
}

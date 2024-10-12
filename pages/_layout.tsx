import { type ReactNode } from "react"

import { cx } from "@/shared/utils"

type LayoutProps = {
  className?: string
  children?: ReactNode
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={cx("relative flex min-h-screen flex-col font-sans", className)}
    >
      {/* <Toaster /> */}
      {/* <Header /> */}

      <main className="yargrow flex-1 pb-1">{children}</main>
      {/* <ScrollToTopButton className="fixed bottom-40 right-4 z-50" /> */}
      {/* <Footer /> */}
    </div>
  )
}

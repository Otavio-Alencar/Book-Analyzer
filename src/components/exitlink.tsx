'use client'
import Link from 'next/link'

export const ExitLink = () => {
  return (
    <Link
      className="rounded-md border border-slate-500 px-4 py-2 text-slate-500"
      href={`/`}
    >
      Exit
    </Link>
  )
}

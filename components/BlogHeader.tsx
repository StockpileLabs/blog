import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-center">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            <Link href="https://stockpile.so" className="hover:underline">
              <img
                src="/wordlogo.svg"
                alt="Stockpile Logo"
                width={280}
                height={220}
              />
            </Link>
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header>
      )

    case 2:
      return (
        <header className=" flex flex-col items-center md:mb-12 md:flex-row md:justify-center">
          <h2 className="mb-1 mt-12 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter justify-center ">
            <Link href="/" className="hover:underline">
              <img
                src="/wordlogo.svg"
                alt="Stockpile Logo"
                width={280}
                height={220}
              />
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}

import { Head, Html, Main, NextScript } from 'next/document'
import BlogFooter from 'components/BlogFooter'
import BlogHeader from 'components/BlogHeader'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black text-white">
        <Main />
        <BlogFooter />
        <NextScript />
      </body>
    </Html>
  )
}

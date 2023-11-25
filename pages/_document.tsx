import { Head, Html, Main, NextScript } from 'next/document'
import BlogFooter from 'components/BlogFooter'
import BlogHeader from 'components/BlogHeader'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-[#121212] text-white">
        <Main />
        <BlogFooter />
        <NextScript />
      </body>
    </Html>
  )
}

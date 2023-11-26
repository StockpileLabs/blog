import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <div className='mt-32'>
            <h1 className='text-7xl font-poppins font-bold text-center'>Get the{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0090fe] to-[#00d8f4]'>latest</span>
            </h1>
            <div className='flex justify-center'>
            <p className='w-6/12 text-zinc-500 font-poppins text-md text-center'>Read updates, project highlights, guides, case-studies, round reviews, and more from the Stockpile Team</p>
          </div>
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

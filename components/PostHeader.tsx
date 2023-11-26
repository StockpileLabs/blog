import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <div className="mt-32 mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className='mb-20'>
        <PostTitle>{title}</PostTitle>
        <div className='flex gap-12 items-center justify-center'>
          <div className="hidden text-zinc-500 md:block">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          <p className='font-poppins text-lg'>●</p>
          <div className="text-lg text-zinc-500">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}

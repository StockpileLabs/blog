import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="w-fit mb-5">
        <Image
          src={urlForImage(coverImage).height(400).width(800).url()}
          alt={title}
          width={500}
          height={300}
          className='w-full h-auto'
        />
      </div>
      <h3 className="mb-2 first-letter:font-poppins text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 font-poppins text-zinc-300 text-sm">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 font-poppins text-zinc-500 text-md leading-relaxed">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}

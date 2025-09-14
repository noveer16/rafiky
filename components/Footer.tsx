import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="w-screen bg-gray-50 py-10 dark:bg-gray-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
        {/* Social Icons */}
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        </div>

        {/* Author + Meta Info */}
        <div className="mb-2 flex flex-wrap justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>•</div>
          <div>© {new Date().getFullYear()}</div>
          <div>•</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}

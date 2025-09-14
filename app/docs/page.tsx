import DocsView from '@/layouts/docs/DocsView'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allDocumentations } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function DocsPage() {
  const docs = allCoreContent(sortPosts(allDocumentations))
  const pageNumber = 1
  const initialDisplayDocs = docs.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(docs.length / POSTS_PER_PAGE),
  }

  return (
    <DocsView
      docs={docs}
      initialDisplayDocs={initialDisplayDocs}
      pagination={pagination}
      title="Documentation"
    />
  )
}

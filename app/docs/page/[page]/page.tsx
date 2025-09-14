import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allDocumentations } from 'contentlayer/generated'
import DocsView from '@/layouts/docs/DocsView'

const DOCS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allDocumentations.length / DOCS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default function Page({ params }: { params: { page: string } }) {
  const docs = allCoreContent(sortPosts(allDocumentations))
  const pageNumber = parseInt(params.page as string)
  const initialDisplayDocs = docs.slice(
    DOCS_PER_PAGE * (pageNumber - 1),
    DOCS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(docs.length / DOCS_PER_PAGE),
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

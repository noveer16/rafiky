import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allDocumentations, allAuthors } from 'contentlayer/generated'
import type { Authors, Documentation } from 'contentlayer/generated'
import DocsSimple from '@/layouts/docs/DocsSimple'
import DocsLayout from '@/layouts/docs/DocsLayout'
import DocsBanner from '@/layouts/docs/DocsBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'DocsLayout'
const layouts = {
  DocsSimple,
  DocsLayout,
  DocsBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const doc = allDocumentations.find((p) => p.slug === slug)
  const authorList = doc?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!doc) {
    return
  }

  const publishedAt = new Date(doc.date).toISOString()
  const modifiedAt = new Date(doc.lastmod || doc.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (doc.images) {
    imageList = typeof doc.images === 'string' ? [doc.images] : doc.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: doc.title,
    description: doc.summary,
    openGraph: {
      title: doc.title,
      description: doc.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allDocumentations.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allDocumentations))
  const docIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (docIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[docIndex + 1]
  const next = sortedCoreContents[docIndex - 1]
  const doc = allDocumentations.find((p) => p.slug === slug) as Documentation
  const authorList = doc?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(doc)
  const jsonLd = doc.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  const Layout = layouts[doc.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={doc.body.code} components={components} toc={doc.toc} />
      </Layout>
    </>
  )
}

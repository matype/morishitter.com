import Head from "next/head"
import Layout, { siteTitle } from "/components/layout"
import GalleryList from "/components/galleryList"
import WorkMeta from "/components/workMeta"
import { getAllWorkIds } from "/lib/work"
import { getSortedGalleriesData } from "/lib/gallery"

import workStyles from "/styles/work.module.css"

export default function Work({ id, allGalleriesData }) {
  const workMdx = require(`/contents/works/${id}.mdx`)
  const meta = workMdx.metadata
  const Content = workMdx.default

  return (
    <Layout>
      <Head>
        <title>
          {meta.title} - {siteTitle}
        </title>
      </Head>
      <article className={workStyles.container}>
        <h1 className={workStyles.title}>{meta.title}</h1>
        <section className={workStyles.markdown}>
          <Content />
        </section>
        <WorkMeta meta={meta} />
      </article>
      <GalleryList galleries={allGalleriesData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allGalleriesData = getSortedGalleriesData()
  return {
    props: {
      id: params.id,
      allGalleriesData,
    },
  }
}

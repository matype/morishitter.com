import Head from "next/head"
import Layout, { siteTitle } from "/components/Layout"
import GalleryList from "/components/GalleryList"
import { getSortedGalleriesData } from "/lib/gallery"

import styles from "/styles/workIndex.module.css"

export async function getStaticProps() {
  const allGalleriesData = getSortedGalleriesData()
  return {
    props: {
      allGalleriesData,
    },
  }
}

export default function WorkHome({ allGalleriesData }) {
  return (
    <Layout>
      <Head>
        <title>Works - {siteTitle}</title>
      </Head>
      <p className={styles.caution}>
        ビジュアルを伴うアウトプット Only です。仕事では GUI
        を作ることが多いですが、アーカイブと相性が良くないのでグラフィックが多めです。
      </p>
      <GalleryList galleries={allGalleriesData} />
    </Layout>
  )
}

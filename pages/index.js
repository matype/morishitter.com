import Head from "next/head"
import Layout, { siteTitle } from "/components/layout"
import Concept from "/components/concept"
import LinkList from "/components/linkList"
import SocialList from "/components/socialList"

import styles from "/styles/home.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Concept />
      <hr className={styles.hr} />
      <LinkList />
      <SocialList />
    </Layout>
  )
}

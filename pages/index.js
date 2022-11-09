import Head from "next/head"
import Layout, { siteTitle } from "/components/Layout"
import Concept from "/components/Concept"
import LinkList from "/components/LinkList"
import SocialList from "/components/SocialList"

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

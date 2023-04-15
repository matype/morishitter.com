import Head from "next/head"
import Layout, { siteTitle } from "/components/layout"

export default function WorkHome() {
  return (
    <Layout>
      <Head>
        <title>Works - {siteTitle}</title>
      </Head>
    </Layout>
  )
}

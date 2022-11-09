import Head from "next/head"
import Layout, { siteTitle } from "/components/Layout"
import Bio from "/components/Bio"
import Content from "/contents/interests.mdx"

import styles from "/styles/interests.module.css"

export default function Interests() {
  return (
    <Layout>
      <Head>
        <title>Interests - {siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <section>
          <h1 className={styles.pageTitle}>Interests</h1>
          <div className={styles.description}>
            <p>"今"ちょうど興味を持って日々楽しんだり学んだりしていることの紹介です。</p>
            <p>各分野ごとに、参考になって今も参照している書籍も並べています。</p>
            <p>
              このページの内容はドメイン内でアーカイブしていませんが、GitHub
              から更新履歴を確認できます。
            </p>
          </div>
          <hr className={styles.innerHr} />
          <div className={styles.markdown}>
            <Content />
          </div>
        </section>
      </div>
      <hr className={styles.hr} />
      <Bio />
    </Layout>
  )
}

import Link from "next/link"

import styles from "../styles/linkList.module.css"

export default function LinkList() {
  return (
    <section className={styles.container}>
      <ul className={styles.internal}>
        <li className={styles.internalItem}>
          <a href="https://moristapaper.com" target="_blank" rel="noopener">
            <div className={styles.title}>Blog</div>
            <div className={styles.description}>日々の記録</div>
          </a>
        </li>
        <li className={styles.internalItem}>
          <Link href={`/works`}>
            <div className={styles.title}>Works</div>
            <div className={styles.description}>作ったもの</div>
          </Link>
        </li>
        <li className={styles.internalItem}>
          <Link href={`/about`}>
            <div className={styles.title}>About</div>
            <div className={styles.description}>アバウトミー</div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

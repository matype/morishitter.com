import Image from "next/legacy/image"
import Link from "next/link"
import SocialList from "/components/socialList"

import styles from "/styles/bio.module.css"

export default function Bio() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          priority
          src={`/profile.jpg`}
          className={styles.image}
          width={100}
          height={100}
          alt={`Morishitter`}
        />
      </div>
      <p className={styles.name}>Masaaki Morishita</p>
      <p className={styles.description}>
        フリーランスのデザイナー。デジタルプロダクトのUIデザインを中心に、ブランディングからユーザー体験設計、ビジュアルデザインをおこなう。
      </p>
      <SocialList />
    </section>
  )
}

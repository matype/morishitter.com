import Image from "next/legacy/image"
import Link from "next/link"

import styles from "../styles/gallery.module.css"

export default function GalleryList({ galleries }) {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {galleries.map(({ id, title, url, image }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/works/${url}`}>
              <div>
                <Image
                  priority
                  src={`/images/galleries/${image}`}
                  className={styles.borderCircle}
                  height={600}
                  width={600}
                  alt={title}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

import Image from "next/legacy/image"
import styles from "/styles/bookList.module.css"

export default function BookList(params) {
  const books = params.books

  return (
    <div className={styles.list}>
      {books.map(({ title, image, url }) => (
        <div className={styles.item} key={url}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/images/books/${image}`}
              alt={title}
              objectFit={"contain"}
              height={245}
              width={245}
            />
          </a>
        </div>
      ))}
    </div>
  )
}

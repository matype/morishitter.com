import Date from "/components/date"
import styles from "/styles/workMeta.module.css"

export default function WorkMeta({ meta }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <div className={styles.meta_key}>CLIENT</div>
          <div className={styles.meta_value}>{meta.client}</div>
        </div>
        {meta.startDate && meta.endDate && (
          <div className={styles.meta}>
            <div className={styles.meta_key}>DATE</div>
            <div className={styles.meta_value}>
              <Date dateString={meta.startDate} /> - <Date dateString={meta.endDate} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

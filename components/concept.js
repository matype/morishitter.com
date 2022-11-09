import styles from "../styles/concept.module.css"

export default function Concept() {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <p className={styles.p_large}>こんにちは、Morishitter です。</p>
        <p className={styles.p_large}>
          使いやすく、心地よいソフトウェアの GUI を作る仕事をしています。
        </p>
        <p className={styles.p_small}>
          いわゆる UI/UXデザイナーというやつですが、その名前を好んでは使いません。
        </p>
        <p className={styles.p_large}>個人事業主をしていて、屋号は「VUG」です。</p>
      </div>
      <div className={styles.block}>
        <p className={styles.p_large}>
          これはポートフォリオサイトですが、
          <br />
          ただ作ってきたものをアーカイブするだけの、
        </p>
        <p className={styles.p_small}>
          決して更新されることがなく、SSLで通信されておらず表示までの時間もかかるような、
        </p>
        <p className={styles.p_large}>トラディショナルなポートフォリオサイトではありません。</p>
        <p className={styles.p_large}>
          制作物だけではなく、日々の考えや活動の記録を蓄積する、
          <br className={styles.only_desktop} />
          常に増え続けるリポジトリのようなサイトを目指しています。
        </p>
      </div>
      <div className={styles.block}>
        <p className={styles.p_large}>人の (思考|志向) は時間軸に沿って変化していくものです。</p>
        <p className={styles.p_large}>
          なので、"今"の僕の関心事や人となりを知っていただくためのハブとして、
          <br className={styles.only_desktop} />
          このサイトが機能すると良いと考えています。
        </p>
        <p className={styles.p_small}>変更履歴（およびソースコード）は GitHub から確認できます。</p>
      </div>
    </section>
  )
}

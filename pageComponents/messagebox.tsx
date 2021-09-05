import Head from "next/head";
import styles from '../styles/Messagebox.module.sass'

interface MessageBoxProps {
  title: string,
  description?: string,
  titleHead?: string,
}

export default function Messagebox(props: MessageBoxProps): JSX.Element {
  return (
    <div>
      {props.titleHead &&
      <Head>
        <title>{props.titleHead}</title>
      </Head>}

      <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.mainRow}>
            <p className={styles.return}><a href={'/'}>return</a></p>
            <p className={styles.subtitle}>{props.description}</p>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.mirrored}>
              <p className={styles.return}><a href={'/'}>return</a></p>
              <p className={styles.subtitle}>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faJs, faReact, faPython, faSwift, faDocker } from '@fortawesome/free-brands-svg-icons'
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link'

interface LandingComProps {
  children?: JSX.Element[] | JSX.Element,
  title: string,
}

function LandingSection(props: LandingComProps) {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>{props.title}</p>
      {props.children &&
        <div className={styles.sectionHiddenContent}>
        {props.children}
      </div>}
    </div>
  )
}

function LandingGithubRepo(props: {name: string, repo: string}) {
  return (
    <a href={`https://github.com/kpostekk/${props.repo}`}>
      {props.name}
    </a>
  )
}

function LandingSectionLink(props: { title: string, goTo: string }) {
  return (
    <div className={styles.section}>
      <Link href={'/blog'}>
        <a className={styles.sectionTitle}>{props.title}</a>
      </Link>
    </div>
  )
}

export default function Landing() {
  return (
    <div>
      <Head>
        <title>@kpostekk</title>
      </Head>

      <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.mainRow}>
            <div className={styles.titles}>
              <h1 className={styles.title}>@kpostekk</h1>
              <p className={styles.subtitle}>Backend dev by day, iOS dev by night</p>
              <p className={styles.subtitle}>
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faJs} />
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faReact} />
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faSwift} />
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faPython} />
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faDocker} />
                <FontAwesomeIcon style={{padding: '4px', fontSize: '30pt'}} icon={faApple} />
              </p>
            </div>
          </div>
          <div className={[styles.mainRow, styles.spacerLine].join(' ')}>
            <div className={styles.sections}>
              <LandingSection title={'Projects'}>
                <LandingGithubRepo name={'.awake(that)'} repo={'AwakeThat'} />
                <LandingGithubRepo name={'Homebridge docker plugin'} repo={'homebridge-docker'} />
                <LandingGithubRepo name={'OpenCore composer'} repo={'opencore-composer'} />
                <LandingGithubRepo name={'ezcliy'} repo={'ezcliy'} />
              </LandingSection>
              <LandingSection title={'Contact'}>
                <a href={'mailto:krystian@postek.eu'}>Email | <code style={{fontFamily: '"JetBrains Mono", monospace', fontSize: '10pt'}}>krystian@postek.eu</code></a>
                <a href={'https://t.me/kpostekk'}>Telegram | <code style={{fontFamily: '"JetBrains Mono", monospace', fontSize: '10pt'}}>@kpostekk</code></a>
                <p>Discord | <code style={{fontFamily: '"JetBrains Mono", monospace', fontSize: '10pt'}}>lil Postman#1221</code></p>
              </LandingSection>
              {/*<LandingSection title={'Utilities'}>
                <a href={'/toolbox'}>Toolbox</a>
              </LandingSection>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

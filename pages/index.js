import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Bowl LV - Familia Mendoza</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏈</text></svg>" />

      </Head>

      <div className={styles.hero}>
        <h1 className={styles.title}>
          <img src="/superbowl-logo.png" alt="Super Bowl LV" className={styles.logo} />
          Super Bowl LV
          <small>Familia Mendoza</small>
        </h1>

      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h1>Luis Fernando</h1>
            <div className={styles.scoreContainer}>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
                  <p>Tampa Bay Buccaneers</p>
                  </div>
                <h2>26</h2>
              </div>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
                  <p>Kansas City Chiefs</p>
                </div>
                <h2>26</h2>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <h1>Araceli</h1>
            <div className={styles.scoreContainer}>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
                  <p>Tampa Bay Buccaneers</p>
                  </div>
                <h2>26</h2>
              </div>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
                  <p>Kansas City Chiefs</p>
                </div>
                <h2>26</h2>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <h1>José Luis</h1>
            <div className={styles.scoreContainer}>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
                  <p>Tampa Bay Buccaneers</p>
                  </div>
                <h2>26</h2>
              </div>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
                  <p>Kansas City Chiefs</p>
                </div>
                <h2>26</h2>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <h1>Victor</h1>
            <div className={styles.scoreContainer}>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
                  <p>Tampa Bay Buccaneers</p>
                  </div>
                <h2>26</h2>
              </div>
              <div className={styles.team}>
                <div className={styles.teamName}>
                  <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
                  <p>Kansas City Chiefs</p>
                </div>
                <h2>26</h2>
              </div>
            </div>
          </article>
        </div>
      </main>
      <img src="/glow.svg" className={styles.glow}/>
    </div>
  )
}

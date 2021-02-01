import Head from 'next/head'
import client from '../client';
import BetCard from '../components/betCard';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
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
          {Object.values(props).map(item => <BetCard {...item} />)}
        </div>
      </main>
      <img src="/glow.svg" className={styles.glow}/>
    </div>
  )
}


Home.getInitialProps = async function(ctx) {
  return await client.fetch(`
    *[_type == "bet"]
  `, {  })
}
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

        <div className={styles.matchScore}>
          <div className={styles.matchTeam}>
            <div className={styles.matchTeamName}>
              <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
              <p>Tampa Bay Buccaneers</p>
            </div>
            <span>{props.match.length && props.match[0].homeScore > 1 ? props.match[0].homeScore : 0 }</span>
          </div>

          <div className={styles.matchTeam}>
            <div className={styles.matchTeamName}>
              <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
              <p>Kansas City Chiefs</p>
            </div>
            <span>{props.match.length && props.match[0].awayScore > 1 ? props.match[0].awayScore  : 0 }</span>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {props.bets.map(item => {
            return <BetCard key={item["_id"]} {...item} />
          })}
          {!props.bets.length &&
            <>
              <h3 style={{textAlign: 'center'}}>
                Aún no hay registros de apuestas. <br/>
                Manda tu quiniela a Luis Fernando por whatsapp <br/>
                Tienes hasta el Domingo 7 de Febrero, antes de las 12 pm
              </h3>
            </>
          }
        </div>
      </main>
      <img src="/glow.svg" className={styles.glow}/>
    </div>
  )
}


Home.getInitialProps = async function(ctx) {
  const match = await client.fetch(`
    *[_type == "match"]
  `, {});

  const bets = await client.fetch(`
    *[_type == "bet"]
  `);

  return await {
    "match": match,
    "bets": bets
  }


}
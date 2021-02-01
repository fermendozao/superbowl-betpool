import styles from '../styles/BetCard.module.css'

export default function BetCard(data) {
  console.log(data);
  return (
    <article className={styles.card}>
      <h1>{data.gamblerName}</h1>
      <div className={styles.scoreContainer}>
        <div className={styles.team}>
          <div className={styles.teamName}>
            <img src="/tampa-logo.svg" alt="Tampa Bay Buccaneers" />
            <p>Tampa Bay Buccaneers</p>
            </div>
          <h2>{data.homeScore}</h2>
        </div>
        <div className={styles.team}>
          <div className={styles.teamName}>
            <img src="/kansas-logo.svg" alt="Kansas City Chiefs " />
            <p>Kansas City Chiefs</p>
          </div>
          <h2>{data.awayScore}</h2>
        </div>
      </div>
    </article>
  )
}
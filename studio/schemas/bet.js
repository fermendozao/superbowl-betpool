export default {
  name: 'bet',
  title: 'Bet',
  type: 'document',
  fields: [
    {
      name: 'gamblerName',
      title: 'Gambler name',
      type: 'string'
    },
    {
      name: 'homeScore',
      title: 'Home Score',
      description: 'Tampa Bay Buccaneers score',
      type: 'number'
    },
    {
      name: 'awayScore',
      title: 'Away Score',
      description: 'Kansas City Chiefs score',
      type: 'number'
    }
  ]
}
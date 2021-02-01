export default {
  name: 'match',
  title: 'Match',
  type: 'document',
  fields: [
    {
      name: 'matchName',
      title: 'Match Name',
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
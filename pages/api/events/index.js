const { events } = require('./data.json')

export default (req, res) => {
  console.log(events)
  if (req.method === 'GET') res.status(200).json(events)
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${res.method} is not allowed` })
  }
}
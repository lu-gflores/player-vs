const { events } = require('./data.json')

export default (req, res) => {
    const tour = events.filter(tr => tr.slug === req.query.slug)
    if (req.method === 'GET') res.status(200).json(tour)
    else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${res.method} is not allowed` })
    }
}
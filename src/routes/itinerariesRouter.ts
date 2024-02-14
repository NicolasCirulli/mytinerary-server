import express from 'express'

const itinerariesRouter = express.Router()

itinerariesRouter.get( '/', (_req, res) => {
    res.send('All itineraries')
})

export default itinerariesRouter
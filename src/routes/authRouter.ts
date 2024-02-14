import express from 'express'

const authRouter = express.Router()

authRouter.get( '/', (_req, res) => {
    res.send('Auth endpoint')
})

export default authRouter
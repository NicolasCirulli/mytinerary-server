import express from 'express'

const authRouter = express.Router()

const aux = (message:string) => (_req: any, res: any) => {res.send(message)}

authRouter.post( '/login', aux('Login'))
authRouter.post( '/register', aux('Register'))
authRouter.post( '/register/google', aux('Register google'))


export default authRouter
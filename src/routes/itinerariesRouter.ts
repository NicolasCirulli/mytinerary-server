import express from 'express'
import validator from '../middleware/validator/validator'
import itinerarySchema from '../middleware/validator/itinerarySchema'

const itinerariesRouter = express.Router()

const aux = (message:string) => (_req: any, res: any) => {res.send(message)}

itinerariesRouter.get( '/', aux('Todos los itinerarios'))
itinerariesRouter.get( '/city/:city', aux('Itinerarios por ciudad'))
itinerariesRouter.post( '/city/:city', validator(itinerarySchema), aux('Crear itinerario'))

itinerariesRouter.get( '/:id', aux('GET - itinerario por ID'))
itinerariesRouter.put( '/:id', aux('PUT - itinerario por ID'))
itinerariesRouter.delete( '/:id', aux('DELETE - itinerario por ID'))

itinerariesRouter.post( '/:id/review', aux('POST - itinerario review'))
itinerariesRouter.put( '/review/:id', aux('PUT - itinerario review'))
itinerariesRouter.delete( '/review/:id', aux('DELETE - itinerario review'))

itinerariesRouter.put('/:id/like', aux('PUT - itinerario like'))


export default itinerariesRouter
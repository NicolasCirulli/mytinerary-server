import express from 'express'
import citiesController from '../controllers/City'
import validator from '../middleware/validator/validator'
import citySchema from '../middleware/validator/citySchema'
const citiesRouter = express.Router()

citiesRouter.get( '/', citiesController.getAllCities)
citiesRouter.get( '/:id', citiesController.getOneCity)
citiesRouter.post( '/', validator(citySchema), citiesController.createCity)

export default citiesRouter
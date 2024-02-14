import { City as CityModel } from "../models/City";
import { City } from "../types";
import { ErrorClient } from "../utils/errorClient";
export const createCity = async (data: Partial<City>): Promise<City> => {
    const city = await CityModel.create(data)
    return city
}

export const getAllCities = async (): Promise<City[]> => {
    const cities = await CityModel.find()
    if( cities.length === 0 ) throw new ErrorClient( 'No hay ciudades', 404 )
    return cities
}

export const getOneCity = async( id: string ):Promise<City>=>{
    const city = await CityModel.findById( id )
    if( !city ) throw new ErrorClient( 'Invalid ID', 404 )
    return city
}

export default {
    createCity: createCity,
    getAllCities: getAllCities,
    getOneCity: getOneCity
}
import { City as CityModel } from "../models/City";
import { cityDTO } from "../models/DTO/City.dto";
import { City, CityDTO } from "../types";
import { citiesData } from "../utils/data";
import { ErrorClient } from "../utils/errorClient";
export const createCity = async (data: Partial<City>): Promise<City> => {
    const city = await CityModel.create(data)
    return city
}

export const getAllCities = async (): Promise<CityDTO[]> => {
    const cities = await CityModel.find()
    if( cities.length === 0 ) throw new ErrorClient( 'No cities found', 404 )
    return cities.map( cityDTO )
}

export const getOneCity = async( id: string ):Promise<CityDTO>=>{
    const city = await CityModel.findById( id )
    if( !city ) throw new ErrorClient( 'Invalid ID', 404 )
    return cityDTO(city)
}

export const createAllCities = async ( ):Promise<CityDTO[]>=>{
    const cities = await CityModel.insertMany( citiesData )
    if( cities.length === 0 ) throw new ErrorClient( 'Failed to create cities', 404 )
    return cities.map( cityDTO )
}

export default {
    createCity: createCity,
    getAllCities: getAllCities,
    getOneCity: getOneCity,
    createAllCities: createAllCities
}
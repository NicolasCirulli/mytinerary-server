export interface City{
    _id: ObjectId,
    name: string,
    country: string,
    description: string,
    image: string,
    currency: string,
    language: string,
    averageRating: number,
    reviews: ObjectId[],
    itineraries: ObjectId[]
}

export interface Review{
    id: string,
    idUser: string,
    review: string,
    date: Date,
    rating: number
}

export interface Itinerary{

}

interface CityDTO {
    _id: string
    name: string
    country: string
    description: string
    image: string
    currency: string
    language: string
    averageRating: number
}
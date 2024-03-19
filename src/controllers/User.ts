import { Request, Response } from "express";
import { HttpResponse } from "../middleware/handleResponse";
import userServices from '../services/User'
import { User } from "../types";
import { catchedAsync } from "../utils/catchedAsync";
const whishList = async (req: Request, res: Response): Promise<void> => {
    const user = req.user as User
    const update = await userServices.wishList( user.email,  req.params.id )
    HttpResponse.Update( res, update, 'Updated' )
};

export default {
    whishList: catchedAsync( whishList )
}
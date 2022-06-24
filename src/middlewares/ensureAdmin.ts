import {Request,Response,NextFunction} from "express";
import { usersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request:Request,response:Response,next:NextFunction){

    const {user_id}=request;
    
    //verificar se usuario admin

    const user= await usersRepositories.findOne({where:{id:user_id}});

   const admin=user?.admin;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized",
    });
}
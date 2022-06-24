import {Request,Response} from "express";
import { UpdateUserService } from "../services/UpdateUserService";
import { functionValidatorRequest } from "../validators/FunctionValidatorRequest";


class UpdateUserController{
    async handle (request:Request,response:Response){
        const {password,name} = request.body;
        const {user_id} = request;

        let errors = functionValidatorRequest(request,response);

        if(errors){
            return response.status(400).json({errors});
        };

        const updateUserService = new UpdateUserService();

        const updateUser = await updateUserService.execute({
            id:user_id,
            name:name,
            password:password
        });

        if(updateUser){
            return response.status(200).json({message:"updated is successful"})
        }

        return response.status(500).json({error:"something wrong"});
    }
}

export {UpdateUserController}
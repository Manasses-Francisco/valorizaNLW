import {Request,Response} from "express";
import {UpdateUserForAdminService}  from "../services/UpdateUserForAdminService";



class UpdateUserForAdminController{

    async handle(request:Request,response:Response){

        const {admin,id_user_mod} = request.body;

        const updateUserForAdminService = new UpdateUserForAdminService();

        const updateValue = await updateUserForAdminService.execute({
            admin_value:admin,
            id_user_modification:id_user_mod
        });

        if(updateValue){
            return response.json({message:"updated succesful"})
        }

        return response.json({message:"updated is failled"});
    }
}

export {UpdateUserForAdminController}
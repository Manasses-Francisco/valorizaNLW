import {Request,Response} from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";
import { functionValidatorRequest } from "../validators/FunctionValidatorRequest";

class CreateComplimentController{

    async handle(request:Request,response:Response){
        const {tag_id,user_receiver,message} = request.body;
        const user_sender=request.user_id;

        let errors = functionValidatorRequest(request,response);

        if(errors){
            return response.status(400).json({errors});
        };

        const createComplimentService = new CreateComplimentService();

        const compliment=await createComplimentService.execute({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        return response.json(compliment);
    }
}

export {CreateComplimentController}
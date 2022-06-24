import {Response,Request} from "express";
import {CreateTagService} from "../services/CreateTagService";
import { functionValidatorRequest } from "../validators/FunctionValidatorRequest";

class CreateTagControlller{

    async handle(request:Request,response:Response){
        const {name}=request.body;

        let errors = functionValidatorRequest(request,response);

        if(errors){  //se houvesse erro, return 400
            return response.status(400).json({errors});
        };

        const createTagService = new CreateTagService();

        const tag = await createTagService.execute({name});

        response.json(tag);

    }
}

export {CreateTagControlller}
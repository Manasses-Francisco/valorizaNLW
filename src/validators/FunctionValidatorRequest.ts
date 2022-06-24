import {Request,Response} from "express";
import {validationResult} from "express-validator";

export function functionValidatorRequest(request:Request,response:Response){
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return errors.array().map((item)=>({error:item.msg}));
    }
}
import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { functionValidatorRequest } from "../validators/FunctionValidatorRequest";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    let errors = functionValidatorRequest(request,response);

    if(errors){
        return response.status(400).json({errors});
    };

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };

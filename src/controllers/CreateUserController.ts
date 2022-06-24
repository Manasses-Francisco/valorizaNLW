import { Request, Response} from "express";
import { CreateUserService } from "../services/CreateUserService";
import { functionValidatorRequest } from "../validators/FunctionValidatorRequest";

class CreateUserController {
  async handle(request: Request, response: Response) {
    
    const { name, email, admin, password } = request.body;

    let errors = functionValidatorRequest(request,response);

    if(errors){
        return response.status(400).json({errors});
    };


    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };

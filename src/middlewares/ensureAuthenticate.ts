import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  //validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const token = authToken.split(" ")[1];
  //aqui podemos usar também const [,token]=authToken.split(" ")

  //validar se token é válido
  try {
    const { sub } = verify(token,`${process.env.SECRET_KEY}`) as IPayload; // para forçar o sub seja um string

    // Recuperar informações de usuário
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }

  //Recuperar informações do usuário
}

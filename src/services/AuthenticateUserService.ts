import {usersRepositories} from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateRequest{
    email:string,
    password:string
}

class AuthenticateUserService{

    async execute({email,password}:IAuthenticateRequest){
        //verifivar se o email existe
        const user=await usersRepositories.findOne({where:{email}});

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        //verificar s a senha está correct
        const passwordMatch=await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        const token=sign({
            email:user.email
        },`${process.env.SECRET_KEY}`,{
            subject:user.id,
            expiresIn:"1d"
        });

        return token;

    }

}

export {AuthenticateUserService}
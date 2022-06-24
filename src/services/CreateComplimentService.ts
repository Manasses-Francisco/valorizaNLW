import { complimentsRepositories } from "../repositories/ComplimentsRepositories";
import {usersRepositories} from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}

class CreateComplimentService{

    async execute({tag_id,user_receiver,user_sender,message}:IComplimentRequest){

        //const complimentsRepository =  complimentsRepositories()

        if(user_sender === user_receiver){
            throw new Error("Incorrect User Receiver");
        }

        const userReceiverExists = await usersRepositories.findOne({where:{
            id:user_receiver
        }});

        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export {CreateComplimentService}
import {usersRepositories} from "../repositories/UsersRepositories";
import {classToPlain} from "class-transformer";

class ListUsersService{
    async execute(){

        const users =await  usersRepositories.find();

        return classToPlain(users);
    }
}

export {ListUsersService}
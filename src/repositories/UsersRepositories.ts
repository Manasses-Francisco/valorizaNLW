import {Repository,EntityRepository} from "typeorm";
import {AppDataSource} from "../database";
import {User} from "../entity/User";

export const usersRepositories=AppDataSource.getRepository(User);


/* A antiga versão se fazia desta forma para criar um repository
@EntityRepository(User)
class UsersRepositories extends Repository<User>{

};

export {UsersRepositories};

*/

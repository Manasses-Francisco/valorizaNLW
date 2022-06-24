import {AppDataSource} from "../database";
import {Compliment} from "../entity/Compliment";


export const complimentsRepositories=AppDataSource.getRepository(Compliment);
import {AppDataSource} from "../database";
import {Tag} from "../entity/Tag";

export const tagsRepositories = AppDataSource.getRepository(Tag);


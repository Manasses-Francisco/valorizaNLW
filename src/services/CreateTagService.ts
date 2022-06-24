import {tagsRepositories} from "../repositories/TagsRepositories";

interface ITagRequest{
    name:string,
}

class CreateTagService{

    async execute({name}:ITagRequest){

        if(!name){
            throw new Error("Incorrect name!")
        }
        const tagsAlreadyExists=await tagsRepositories.findOne({where:{name}});

        if(tagsAlreadyExists){
            throw new Error("Tag already exists!")
        }

        const tag=tagsRepositories.create({name});

        await tagsRepositories.save(tag);

        return tag;
    }
}

export {CreateTagService};
import { tagsRepositories } from "../repositories/TagsRepositories";
import {classToPlain,instanceToPlain} from "class-transformer";

class ListTagsService {
  async execute() {
    const tags = await tagsRepositories.find();

    //tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

    return instanceToPlain(tags);
  }
}

export { ListTagsService };

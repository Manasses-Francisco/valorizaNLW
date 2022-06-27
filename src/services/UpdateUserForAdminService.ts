import { ObjectID } from "typeorm";
import { usersRepositories } from "../repositories/UsersRepositories";

interface IUpdateUserFormAdminRequest {
  id_user_modification: string;
  admin_value: boolean;
}

class UpdateUserForAdminService {
  async execute({
    id_user_modification,
    admin_value,
  }: IUpdateUserFormAdminRequest) {
    if (!id_user_modification) {
      throw new Error("ID the user modification is required");
    }

    const user = await usersRepositories.findOne({
      where: { id: id_user_modification },
    });

    if (!user) {
      throw new Error("user is not exists");
    }

    let update_user;

     update_user = await usersRepositories
      .update({ id: id_user_modification }, { admin: admin_value })
      .then(() => {
        return true;
      }).catch((err)=> { return false});

    return update_user;
  }
}

export { UpdateUserForAdminService };

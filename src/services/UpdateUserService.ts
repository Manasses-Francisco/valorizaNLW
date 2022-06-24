import { usersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUpdateUserRequest {
  name: string;
  password: string;
  id: string;
}

class UpdateUserService {
  async execute({ id, name, password }: IUpdateUserRequest) {
    if (!name) {
      throw new Error("name is required");
    }

    if (!id) {
      throw new Error("id is required");
    }

    if (!password) {
      throw new Error("password is required");
    }

    const passwordHash = await hash(password, 8);

    let state;

    await usersRepositories
      .update(
        { id },
        {
          name,
          password: passwordHash,
        }
      )
      .then(() => {
        return state=true;
      })
      .catch((error) => {
        return state=false;
      });

      return state;
  }
}

export { UpdateUserService };

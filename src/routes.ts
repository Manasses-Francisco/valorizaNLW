import {Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagControlller} from "./controllers/CreateTagController";

import {userCreateValidator,loginValidator,createComplimentValidator,createTagValidator,updateUserValidator} from "./validators/CheckValidator";

import {ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticate} from "./middlewares/ensureAuthenticate";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UpdateUserForAdminController } from "./controllers/UpdateUserForAdminController";

const router=Router();

const createUserController=new CreateUserController();
const createTagController=new CreateTagControlller();
const authenticateUserController=new AuthenticateUserController();
const createComplimentController=new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const updateUserForAdminController = new UpdateUserForAdminController();


router.post("/users",userCreateValidator,createUserController.handle);
router.post("/tags",createTagValidator,ensureAuthenticate,ensureAdmin,createTagController.handle);
router.get("/tags",ensureAuthenticate,listTagsController.handle);
router.post("/login",loginValidator,authenticateUserController.handle);
router.post("/compliments",createComplimentValidator,ensureAuthenticate,createComplimentController.handle);
router.get("/users/compliments/send",ensureAuthenticate,listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",ensureAuthenticate,listUserReceiveComplimentsController.handle);
router.get("/users",ensureAdmin,listUsersController.handle);
router.put("/users/update",updateUserValidator,ensureAuthenticate,updateUserController.handle);
router.put("/users/admin/update",ensureAuthenticate,ensureAdmin,updateUserForAdminController.handle);


export {router};
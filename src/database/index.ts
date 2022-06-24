import {DataSource} from "typeorm";


export  const AppDataSource= new DataSource({
    type:"sqlite",
    database:`${process.env.DATABASE_NAME}`,
    migrations:["src/database/migrations/*.ts"],
    entities:["src/entity/*.ts"],
});
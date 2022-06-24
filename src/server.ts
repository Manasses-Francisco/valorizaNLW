import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";

import { AppDataSource } from "./database";

import { router } from "./routes";

AppDataSource.initialize()
  .then(() => {
    console.log("Data source has been initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

//fazer middleware para os errors
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(`${process.env.PORT}`, () => console.log("Server is runing NLW "));


import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import { connect } from "./utils/db";
import bookRouter from "./resources/book/book.router";
import characterRouter from "./resources/character/character.router";
import movieRouter from "./resources/movie/movie.router";
import raceRouter from "./resources/race/race.router";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/book", bookRouter);
app.use("/api/character", characterRouter);
app.use("/api/movie", movieRouter);
app.use("/api/race", raceRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

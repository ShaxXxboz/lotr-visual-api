import mongoose from "mongoose";
import options from "../config";

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    "mongodb+srv://booradley:VWNGCEzf86HBESOa@lotr-db-xbbx7.mongodb.net/test?retryWrites=true&w=majority",
    { ...opts, useNewUrlParser: true }
  );
};

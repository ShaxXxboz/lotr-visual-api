import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
    },
    musicBy: {
      type: String,
    },
    distributedBy: {
      type: String,
    },
    language: {
      type: String,
    },
    basedOn: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    image: String,
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);

import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
    },
    director: {
      type: String,
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
      ref: "Book",
    },
    image: String,
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);

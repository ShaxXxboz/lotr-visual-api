import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255
    },
    releaseYear: {
      type: Number,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    description: String,
    budget: {
      type: String,
      maxlength: 15
    },
    image: String
  },
  { timestamps: true }
);

export const Movie = mongoose.model("movie", movieSchema);

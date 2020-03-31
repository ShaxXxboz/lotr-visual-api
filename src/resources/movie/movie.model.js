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
    budget: {
      type: String,
      maxlength: 128
    },
    musicBy: {
      type: String,
      maxlength: 128
    },
    distributedBy: {
      type: String,
      maxlength: 128
    },
    language: {
      type: String,
      maxlength: 128
    }
  },
  { timestamps: true }
);

export const Movie = mongoose.model("movie", movieSchema);

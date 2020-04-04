import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publicationDate: String,
    genre: String,
    language: String,
    country: String,
    image: String,
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255
    },
    author: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255
    },
    publicationDate: Date,
    publisherName: String
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);

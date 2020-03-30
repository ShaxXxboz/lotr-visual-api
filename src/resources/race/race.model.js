import mongoose from "mongoose";

const raceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxlenght: 255,
      required: true
    },
    description: String
  },
  { timestamps: true }
);

export const Race = mongoose.model("Race", raceSchema);

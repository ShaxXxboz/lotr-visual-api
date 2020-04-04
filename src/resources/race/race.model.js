import mongoose from "mongoose";

const raceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dominions: String,
    languages: String,
    lifespan: String,
    distinctions: String,
    height: String,
    skinColor: String,
    hairColor: String,
    image: String,
  },
  { timestamps: true }
);

export const Race = mongoose.model("Race", raceSchema);

import mongoose from "mongoose";

const characterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    titles: {
      type: String,
    },
    raceId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Race",
    },
    hairColor: {
      type: String,
    },
    actor: {
      type: String,
    },
    culture: {
      type: String,
    },
    weapons: {
      type: String,
    },
    image: String,
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Character = mongoose.model("Character", characterSchema);

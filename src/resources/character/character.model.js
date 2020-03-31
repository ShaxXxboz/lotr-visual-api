import mongoose from "mongoose";

const characterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlenght: 255
    },
    title: {
      type: String,
      maxlenght: 255
    },
    raceId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Race"
    },
    hairColor: {
      type: String,
      maxlenght: 64
    },
    actor: {
      type: String,
      maxlenght: 255
    },
    culture: {
      type: String,
      maxlenght: 255
    },
    weapon: {
      type: String,
      maxlenght: 255
    }
    image: String
  },
  { timestamps: true }
);

export const Character = mongoose.model("character", characterSchema);

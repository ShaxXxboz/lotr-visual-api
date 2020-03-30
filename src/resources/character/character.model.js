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
    description: {
      type: String
    },
    birthYear: {
      type: String,
      maxlenght: 128
    },
    raceId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Race"
    },
    image: String
  },
  { timestamps: true }
);

export const Character = mongoose.model("character", characterSchema);

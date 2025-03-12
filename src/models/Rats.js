import { Schema } from "mongoose";

export const RatsSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 1, maxLength: 100 },
    callsign: { type: String, required: true, minLength: 1, maxLength: 100 },
    picture: { type: String, required: true, minLength: 1, maxLength: 100 },
    specialties: [{ type: String, required: true, minLength: 1, maxLength: 100 }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }

)
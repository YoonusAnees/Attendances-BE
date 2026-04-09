import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: ["Mr", "Ms"],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    attending: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Attending", "Not Attending"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Participant", participantSchema);
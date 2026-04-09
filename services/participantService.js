import Participant from "../models/Participant.js";

export const createParticipant = async ({ title, name }) => {
  const cleanTitle = title.trim();
  const cleanName = name.trim();

  const existingParticipant = await Participant.findOne({
    title: cleanTitle,
    name: { $regex: new RegExp(`^${cleanName}$`, "i") },
  });

  if (existingParticipant) {
    return existingParticipant;
  }

  return Participant.create({
    title: cleanTitle,
    name: cleanName,
  });
};

export const updateAttendance = async (id, attending) => {
  return Participant.findByIdAndUpdate(id, { attending }, { new: true });
};

export const getAllParticipants = async () => {
  return Participant.find().sort({ createdAt: -1 });
};
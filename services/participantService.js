import Participant from "../models/Participant.js";

export const createParticipant = async (data) => {
  return await Participant.create(data);
};

export const updateAttendance = async (id, attending) => {
  return await Participant.findByIdAndUpdate(
    id,
    { attending },
    { new: true }
  );
};

export const getAllParticipants = async () => {
  return await Participant.find().sort({ createdAt: -1 });
};
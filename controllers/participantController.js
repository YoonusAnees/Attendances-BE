import * as participantService from "../services/participantService.js";

export const createParticipant = async (req, res) => {
  try {
    const participant = await participantService.createParticipant(req.body);
    res.status(200).json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const participant = await participantService.updateAttendance(
      req.params.id,
      req.body.attending
    );
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getParticipants = async (req, res) => {
  try {
    const participants = await participantService.getAllParticipants();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
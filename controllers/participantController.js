import * as participantService from "../services/participantService.js";

export const createParticipant = async (req, res) => {
  try {
    const participant = await participantService.createParticipant(req.body);
    res.json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const participant = await participantService.updateAttendance(
      req.params.id,
      req.body.attending
    );
    res.json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getParticipants = async (req, res) => {
  try {
    const data = await participantService.getAllParticipants();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
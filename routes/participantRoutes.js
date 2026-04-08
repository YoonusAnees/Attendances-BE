import express from "express";
import {
  createParticipant,
  updateAttendance,
  getParticipants
} from "../controllers/participantController.js";

const router = express.Router();

router.post("/", createParticipant);
router.put("/:id/attendance", updateAttendance);
router.get("/", getParticipants);

export default router;
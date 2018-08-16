import { Router } from "express";

import {
  getTheatres,
  getTheatreByID,
  postTheatre,
  updateTheatreByID,
  deleteTheatreByID
} from "./theatre.controller";
import authentication from "../../../middlewares/authentication";

const router = Router();

router.get("/", getTheatres);
router.get("/:theatreID", getTheatreByID);
router.post("/", authentication, postTheatre);
router.put("/:theatreID", authentication, updateTheatreByID);
router.delete("/:theatreID", authentication, deleteTheatreByID);

export default router;

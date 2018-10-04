import { Router } from "express";

import {
  getcinemas,
  getcinemaByID,
  postcinema,
  updatecinemaByID,
  deletecinemaByID
} from "./cinema.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.get("/", getcinemas);
router.get("/:cinemaID", getcinemaByID);
router.post("/", postcinema);
router.put("/:cinemaID", updatecinemaByID);
router.delete("/:cinemaID", deletecinemaByID);

export default router;

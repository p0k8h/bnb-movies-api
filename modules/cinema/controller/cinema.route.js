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
router.put("/:cinemaID", authentication, authorization, updatecinemaByID);
router.delete("/:cinemaID", authentication, authorization, deletecinemaByID);

export default router;

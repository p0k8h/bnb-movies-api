import { Router } from "express";

import { getSeats, postSeat } from "./seat.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.get("/", getSeats);
router.post("/", postSeat);

export default router;

import { Router } from "express";

import { getSeats, postSeat } from "./seat.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.post("/", getSeats);
router.post("/post", postSeat);

export default router;

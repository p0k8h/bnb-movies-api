import { Router } from "express";

import { signupUser, updateUser, getUserByID } from "./user.controller";
import authentication from "../../../middlewares/authentication";

const router = Router();

router.post("/signup", signupUser);
router.get("/:userID", getUserByID);
router.put("/:userID", updateUser);

export default router;

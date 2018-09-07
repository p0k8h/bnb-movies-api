import { Router } from "express";

import { signupUser, updateUser, getUserByID } from "./user.controller";
import authentication from "../../../middlewares/authentication";

const router = Router();

router.post("/", signupUser);
router.get("/:userID", getUserByID);
router.put("/", authentication, updateUser);

export default router;

import { Router } from "express";

import { signupUser, updateUser } from "./user.controller";
import authentication from "../../../middlewares/authentication";

const router = Router();

router.post("/", signupUser);
router.get("/:userID", getUserById);
router.put("/", authentication, updateUser);

export default router;

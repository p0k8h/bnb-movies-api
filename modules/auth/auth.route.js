import { Router } from "express";
const router = Router();

import { login } from "./auth.controller";

router.post("/login", login);

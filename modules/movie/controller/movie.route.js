import { Router } from "express";

import { getMovies, postMovie } from "./movie.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.get("/", getMovies)
router.post("/", authentication, authorization, postMovie);

export default router;

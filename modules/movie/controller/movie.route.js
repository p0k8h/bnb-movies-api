import { Router } from "express";

import { getMovies, postMovie, putMovie } from "./movie.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.get("/", getMovies)
// router.post("/", authentication, authorization, postMovie);
router.post("/", postMovie);
router.put("/:movieID", authentication, authorization, putMovie);

export default router;

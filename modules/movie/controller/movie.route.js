import { Router } from "express";

import { getMovies, postMovie, putMovie, deleteMovieByID } from "./movie.controller";
import authentication from "../../../middlewares/authentication";
import authorization from "../../../middlewares/authorization";

const router = Router();

router.get("/", getMovies)
// router.post("/", authentication, authorization, postMovie);
router.post("/", postMovie);
router.put("/:movieID", authentication, authorization, putMovie);
router.delete("/:movieID", deleteMovieByID);

export default router;

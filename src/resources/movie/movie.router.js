import { Router } from "express";
import controllers from "./movie.controllers";

const router = Router();

router.route("/");

router.route("/:id").get(controllers.getOne);

export default router;

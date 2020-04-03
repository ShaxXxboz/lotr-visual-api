import { Router } from "express";
import controllers from "./character.controllers";

const router = new Router();

router.route("/").get(controllers.getMany);

router.route("/:id").get(controllers.getOne);

export default router;

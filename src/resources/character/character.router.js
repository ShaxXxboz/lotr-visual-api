import { Router } from "express";
import controllers from "./character.controllers";

const router = new Router();

router.route("/").get(controllers.getMany);

router.route("/:slug").get(controllers.getOne);

export default router;

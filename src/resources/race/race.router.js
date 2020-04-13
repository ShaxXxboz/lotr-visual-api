import { Router } from "express";
import controllers from "./race.controllers";

const router = Router();

router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);

router.route("/:slug").get(controllers.getOne);

export default router;

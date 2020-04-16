import { Router } from "express";
import controllers from "./character.controllers";
import { Character } from "./character.model";

Character.pre("findOne", function() {
  this.populate("race");
});

const router = new Router();

router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);

router.route("/:slug").get(controllers.getOne);

export default router;

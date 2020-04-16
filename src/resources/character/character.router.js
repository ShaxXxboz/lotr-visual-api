import { Router } from "express";
import controllers from "./character.controllers";
/* import { Character } from './character.model'

ArticleSchema.pre('findOne', function () {
  this.populate('author');
}); */

const router = new Router();

router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);

router
  .route("/:slug")
  .get(controllers.getOne.populate("raceId").execPopulate());

export default router;

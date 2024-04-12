import express from "express";
import {
  postLostItems,
  getLostItems,
  getLostItemsById,
  getLostItemsByUId,
} from "../controllers/lostItems.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const lostItemRouter = express.Router();

lostItemRouter.route("/postLostItem").post(
  verifyJWT,
  upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]),
  postLostItems
);

lostItemRouter.route("/getLostItems").get(verifyJWT, getLostItems);

lostItemRouter.route("/getLostItemsById/:id").get(verifyJWT, getLostItemsById);
lostItemRouter.route("/getLostItemsByUId").get(verifyJWT, getLostItemsByUId);

export default lostItemRouter;

import express from "express";
import {
  postLostItems,
  getLostItems,
  getLostItemsById,
  getLostItemsByUId,
} from "../controllers/LostItems.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const LostItemRouter = express.Router();

LostItemRouter.route("/postLostItems")
  .post(verifyJWT, upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]), postLostItems);

LostItemRouter.route("/getLostItems").get(verifyJWT, getLostItems);

LostItemRouter.route("/getLostItemsById/:id").get(verifyJWT, getLostItemsById);

LostItemRouter.route("/getLostItemsByUId").get(verifyJWT, getLostItemsByUId);

export default LostItemRouter;

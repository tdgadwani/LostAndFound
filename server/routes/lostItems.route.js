import express from "express";
import {
  postLostItems,
  getLostItems,
  getLostItemsById,
  getLostItemsByUId,
} from "../controllers/lostItems.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userCheckedIn } from "../middlewares/checkIn.middleWare.js";

const lostItemRouter = express.Router();

lostItemRouter.route("/postLostItem").post(
  verifyJWT,
  userCheckedIn,
  upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]),
  postLostItems
);

lostItemRouter.route("/getLostItems").get(verifyJWT,userCheckedIn, getLostItems);
lostItemRouter.route("/getLostItemsById/:id").get(verifyJWT,userCheckedIn, getLostItemsById);
lostItemRouter.route("/getLostItemsByUId").get(verifyJWT,userCheckedIn, getLostItemsByUId);

export default lostItemRouter;

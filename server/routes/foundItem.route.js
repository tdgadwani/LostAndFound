import express from "express";
import {
  postFoundItems,
  getFoundItems,
  getFoundItemById,
  getFoundItemsByUId,
  updateFoundItem,
  getRetrievedItems,
} from "../controllers/foundItems.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userCheckedIn } from "../middlewares/checkIn.middleWare.js";

const foundItemRouter = express.Router();

foundItemRouter.route("/postFoundItem").post(
  verifyJWT,
  userCheckedIn,
  upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]),
  postFoundItems
);

foundItemRouter.route("/getFoundItems").get(verifyJWT, getFoundItems);

foundItemRouter.route("/getFoundItemsById/:id").get(
  verifyJWT,
  getFoundItemById
);

foundItemRouter.route("/getFoundItemsByUId").get(verifyJWT,userCheckedIn, getFoundItemsByUId);
foundItemRouter.route("/updateFoundItems/:id").patch(verifyJWT,userCheckedIn,updateFoundItem);
foundItemRouter.route("/getRetreivedItems").get(verifyJWT,userCheckedIn, getRetrievedItems);

export default foundItemRouter;

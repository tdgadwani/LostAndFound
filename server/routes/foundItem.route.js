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

const foundItemRouter = express.Router();

foundItemRouter.route("/postFoundItem").post(
  verifyJWT,
  upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]),
  postFoundItems
);

foundItemRouter.route("/getFoundItems").get(verifyJWT, getFoundItems);

foundItemRouter.route("/getFoundItemsById/:id").get(
  verifyJWT,
  getFoundItemById
);

foundItemRouter.route("/getFoundItemsByUId").get(verifyJWT, getFoundItemsByUId);
foundItemRouter.route("/updateFoundItems/:id").patch(verifyJWT,updateFoundItem);
foundItemRouter.route("/getRetreivedItems").get(verifyJWT,getRetrievedItems);

export default foundItemRouter;

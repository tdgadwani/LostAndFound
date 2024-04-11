import express from "express";
import {
  postFoundItems,
  getFoundItems,
  getFoundItemById,
  getFoundItemsByUId,
} from "../controllers/FoundItems.controller";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const FoundItemRouter = express.Router();

FoundItemRouter.route("/postFoundItems")
  .post(verifyJWT, upload.fields([{ name: "media", maxCount: 4, minCount: 1 }]), postFoundItems);

FoundItemRouter.route("/getFoundItems").get(verifyJWT, getFoundItems);

FoundItemRouter.route("/getFoundItemsById/:id").get(verifyJWT, getFoundItemsById);

FoundItemRouter.route("/getFoundItemsByUId").get(verifyJWT, getFoundItemsByUUid);

export default FoundItemRouter;

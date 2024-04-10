import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Reward", "Reward Redemption", "Recommendation System"],
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

notificationSchema.index({timestamp: 1},{expireAfterSeconds: 30 * 24 * 60 * 60});

const Notification = mongoose.model("Notification",notificationSchema);

export {
    Notification,
}
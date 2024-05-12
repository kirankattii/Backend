import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudnar url
      required: true,
    },
    thumbnali: {
      type: String, //cloudnar url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //cloudnar url
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Type.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

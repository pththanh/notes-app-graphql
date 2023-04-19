import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    authorID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FolderModel = mongoose.model("Folder", folderSchema);

export default FolderModel;

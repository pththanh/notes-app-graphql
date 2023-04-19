import fakeData from "../fakeData/index.js";
import { FolderModel } from "../models/index.js";

export const resolvers = {
  Query: {
    folders: async () => {
      const folders = await FolderModel.find();
      return folders;
    },
    folder: (parent, args) => {
      const folderId = args.folderId;
      return fakeData.folders.find((folder) => folder.id === +folderId);
    },
    note: (parent, args) => {
      const noteId = args.noteId;
      return fakeData.notes.find((note) => note.id === noteId);
    },
  },
  Folder: {
    author: (parent, args) => {
      const authorID = parent.authorID;
      return fakeData.author.find((author) => author.id === authorID);
    },
    notes: (parent, args) => {
      return fakeData.notes.filter((note) => note.folderId === parent.id);
    },
  },
};

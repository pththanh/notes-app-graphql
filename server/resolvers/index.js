import fakeData from "../fakeData/index.js";
import { AuthorModel, FolderModel } from "../models/index.js";

export const resolvers = {
  Query: {
    folders: async (parent, args, context) => {
      const folders = await FolderModel.find({
        authorID: context.uid,
      });
      return folders;
    },
    folder: async (parent, args) => {
      const folderId = args.folderId;

      const foundFother = await FolderModel.findOne({
        _id: folderId,
      });

      return foundFother;
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
  Mutation: {
    addFolder: async (parent, args, context) => {
      const newFolder = new FolderModel({ ...args, authorID: context.uid });
      await newFolder.save();

      return newFolder;
    },
    register: async (parent, args) => {
      const foundUser = await AuthorModel.findOne({ uid: args.uid });

      if (!foundUser) {
        const newUser = new AuthorModel(args);
        await newUser.save();
        return newUser;
      }

      return foundUser;
    },
  },
};

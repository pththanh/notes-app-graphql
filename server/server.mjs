import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import fakeData from "./fakeData/index.js";

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
  type Folder {
    id: String,
    name: String,
    createdAt: String
    author: Author
    notes: [Note]
  }

  type Note {
    id: String
    content: String
  }

  type Author {
    id: String, 
    name: String,
  }

  type Query {
    folders: [Folder]
    folder(folderId: String): Folder
    note(noteId: String): Note 
  }
`;
const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
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

const URI = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.p1unytq.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.port || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ PORT: 4000 }, resolve));
console.log("Server is running at port 4000");

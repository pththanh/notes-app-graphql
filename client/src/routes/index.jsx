import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ProtectedRouter from "./ProtectedRouter";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";
import { noteLoader, notesLoader } from "../utils/noteUtil";
import { folderLoader } from "../utils/folderUtils";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Login />, path: "/login" },
      {
        element: <ProtectedRouter />,
        children: [
          {
            element: <Home />,
            path: "/",
            loader: folderLoader,
            children: [
              {
                element: <NoteList />,
                path: "folders/:folderId",
                loader: notesLoader,
                children: [
                  {
                    element: <Note />,
                    loader: noteLoader,
                    path: "note/:noteId",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

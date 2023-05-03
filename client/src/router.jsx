import React from 'react';
import App from "./App";
import { Login } from './pages/Login';
import {
  PostList,
  PostDetail,
  PostEdit,
} from './pages/Post';
import { Drafts } from "./pages/Drafts";
import { NotFound } from './pages/NotFound';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <PostList /> },
        {
          path: "/post/:id",
          element: <PostDetail />,
        },
        { path: "/post/:id/edit", element: <PostEdit /> },
        { path: "/post/:id/publish" },
        { path: "/post/:id/remove" },
        { path: "/post/new", element: <PostEdit /> },
        { path: "/login", element: <Login /> },
        { path: "/drafts", element: <Drafts /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ],
  {}
);

export default router;

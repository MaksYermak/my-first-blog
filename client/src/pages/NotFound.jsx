import React from "react";
import { Typography } from "@mui/material";
import { LinkRoute } from "../components/LinkRoute";

export const NotFound = () => {
  return (
    <>
      {/* Page Not Found! */}
      <LinkRoute to={"/"}>Home</LinkRoute>
      <Typography variant="h2">404: page not found!</Typography>
    </>
  );
};

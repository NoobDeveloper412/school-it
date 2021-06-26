import { Redirect, Route } from "react-router-dom";

import { ProtectedRouteProps } from "@typings/ProtectedRoute.util.types";
import React from "react";
import useAppSelector from "../hooks/useAppSelector.hook";

export default function ProtectedRoute({
  children,
  path,
}: ProtectedRouteProps) {
  const isLogged = useAppSelector((state) => state.session.isLogged);

  return (
    <Route path={path}>{isLogged ? children : <Redirect to="/login" />}</Route>
  );
}

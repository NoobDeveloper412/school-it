import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import DashboardPage from "@pages/Dashboard.page";
import IndexPage from "@pages/Index.page";
import LoginPage from "@pages/Login.page";
import NotFoundPage from "@pages/NotFound.page";
import ProtectedRoute from "@utils/ProtectedRoute.util";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop={true}
        closeOnClick
      />
      <Router>
        <Switch>
          <ProtectedRoute path="/dashboard/:tab?">
            <DashboardPage />
          </ProtectedRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/status">
            <div>Status page</div>
          </Route>
          <Route
            path="/source"
            component={() => {
              window.location.href = "https://github.com/Jokurale/school-it";
              return null;
            }}
          ></Route>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="*" exact>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

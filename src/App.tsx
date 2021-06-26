import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import DashboardPage from "@pages/Dashboard.page";
import IndexPage from "@pages/Index.page";
import LoginPage from "@pages/Login.page";
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
          <Route path="/dashboard/:tab?">
            <DashboardPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

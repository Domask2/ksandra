import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import NonAuthProvider from "../components/NonAuthProvider";
import AuthProvider from "../components/AuthProvider";
import NoteFoundPage from "../Page/NoteFoundPage";
import HomePage from "../Page/HomePage";
import LoginAuth from "../Page/LoginAuth";
import Registration from "../Page/Registration";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={AppRoute.FORGOT_PASSWORD} element={<ForgotPassword />} /> */}
        <Route element={<NonAuthProvider />}>
          <Route path={"/login"} element={<LoginAuth />} />
          <Route path={"/register"} element={<Registration />} />
        </Route>
        <Route element={<AuthProvider />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path="*" element={<NoteFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

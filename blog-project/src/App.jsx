/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import authService from "./appwrite/auth/auth";
import { login, logout } from "./redux/featured/authSlice";
import config from "./config/config";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(config.appwriteUrl);
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          useDispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : null;
}

export default App;

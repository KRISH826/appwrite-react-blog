/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import authService from "./appwrite/auth/auth";
import { login, logout } from "./redux/featured/authSlice";
import config from "./config/config";
import { Routes, Route } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = location.pathname === "/login";
  const isSignUp = location.pathname === "/signup";
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
      {/* {!isLoggedIn || (!isSignUp && <Header />)}
      <Outlet />
      {!isLoggedIn || (!isSignUp && <Footer />)} */}
      {!isLoggedIn && !isSignUp ? <Header /> : null}
      <main>
        <Outlet />
      </main>
      {!isLoggedIn && !isSignUp ? <Footer /> : null}
    </>
  ) : null;
}

export default App;

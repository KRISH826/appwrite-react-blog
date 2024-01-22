/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import authService from "./appwrite/auth/auth";
import { login, logout } from "./redux/featured/authSlice";
import config from "./config/config";
import Signup from "./components/Signup";

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
  return (
    <>
      {loading ? <h2>loading...</h2> : <h2>loading null</h2>}
      <h1 className='underline text-3xl text-black'>HELLO WORLD</h1>
    </>
  );
}

export default App;

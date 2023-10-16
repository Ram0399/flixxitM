import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice"; // Corrected import path
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser); // Get the user state from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Not logged in
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route index element={<HomeScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

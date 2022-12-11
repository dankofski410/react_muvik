import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UserReports from "./components/UserReports";
import UserChannels from "./components/UserChannels";
import Admin from "./components/Admin";
import DistributeChannels from "./components/DistributeChannels";
import UserPermissions from "./components/UserPermissions";
import CreateChannel from "./components/CreateChannel";

const App = () => {
  const [showSubAdminBoard, setShowSubAdminBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowSubAdminBoard(user.roles.includes("ROLE_SUB-ADMIN"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Muvik
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showSubAdminBoard && (
            <li className="nav-item">
              <Link to={"/sub-admin"} className="nav-link">
                Sub-Admin Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Dashboard
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user-reports"} className="nav-link">
                User Reports
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/channels"} className="nav-link">
                User Channels
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Log Out
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/distribute-channels" element={<DistributeChannels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/permissions" element={<UserPermissions />} />
          <Route path="/distribute-channels" element={<DistributeChannels />} />
          <Route path="/create-channel" element={<CreateChannel />} />
          <Route path="/user-reports" element={<UserReports />} />
          <Route path="/channels" element={<UserChannels />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

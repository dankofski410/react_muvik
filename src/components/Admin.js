import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";

import UserService from "../services/users";
import DistributeChannels from "./DistributeChannels";

const Admin = () => {
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");

  useEffect(() => {
    UserService.getAdminDash().then(
      (response) => {
        setHeader(response.data);
        setContent(
          <div className="list-group">
            <Link
              to={"/register"}
              className="list-group-item list-group-item-action"
            >
              Create User
            </Link>
            <Link
              to={"/distribute-channels"}
              className="list-group-item list-group-item-action"
            >
              Distribute Channels
            </Link>
            <Link
              to={"/permissions"}
              className="list-group-item list-group-item-action"
            >
              Grant Permissions
            </Link>
            <Link
              to={"/create-channel"}
              className="list-group-item list-group-item-action"
            >
              Create Channel
            </Link>
          </div>
        );
      },
      (error) => {
        const _header =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setHeader(_header);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{header}</h3>
        {content}
      </header>
    </div>
  );
};

export default Admin;

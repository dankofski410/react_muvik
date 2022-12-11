import React, { useState, useEffect } from "react";

import UserService from "../services/users";

const UserReports = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserReports().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default UserReports;

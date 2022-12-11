import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import UserService from "../services/users";

const DistributeChannels = () => {
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.adminDistributeChannels().then(
      (response) => {
        console.log(response.data.data.user_data[0]);
        let _content;
        setHeader(response.data.message);
        setUsers(response.data.data.user_data);
        setChannels(response.data.data.channels);
        setContent(_content);
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
      </header>
      <Accordion>
        {users.map((entry) => (
          <Accordion.Item eventKey={entry.id}>
            <Accordion.Header>{entry.name}</Accordion.Header>
            <Accordion.Body>
              {channels.map((channel) => {
                return (
                  <label>
                    <input type="checkbox" />
                    {channel.name}
                  </label>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default DistributeChannels;

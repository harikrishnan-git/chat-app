import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";
import axios from "axios";

export default function Conversations() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="py-2 flex flex-col overflow-auto sm:h-[270px] md:h-[400px]">
      {users.map((key, index) => {
        return <Conversation key={index} data={users[index]} />;
      })}
    </div>
  );
}

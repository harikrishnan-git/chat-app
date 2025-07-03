import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext({});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser?._id) {
      console.log("No user authenticated, skipping socket connection.");
      return;
    }
    if (authUser) {
      console.log("Connecting to socket server...");
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      console.log("Socket connected:", newSocket.id);
      setSocket(newSocket);

      newSocket.on("onlineUsers", (users) => {
        setOnlineUsers(users);
        console.log("Online users updated:", users);
      });

      return () => newSocket.close();
    } else {
      setSocket(null);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

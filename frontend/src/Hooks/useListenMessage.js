import { useSocketContext } from "../Context/SocketContext";
import { useEffect } from "react";
import useConversationStore from "../zustand/useConversationStore";

export default function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationStore();

  useEffect(() => {
    socket?.on("newMessage", (msg) => {
      setMessages([...messages, msg.msg]);
      //   console.log("New message received:", msg);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}

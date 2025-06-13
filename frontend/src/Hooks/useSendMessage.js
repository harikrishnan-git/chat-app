import { useState } from "react";
import useConversationStore from "../zustand/useConversationStore";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } =
    useConversationStore();

  const sendMessage = async (msg) => {
    if (!selectedConversation) {
      console.error("No conversation selected");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        {
          message: msg,
        }
      );

      // Update messages in the store
      setMessages([...messages, response.data]);
    } catch (error) {
      toast.error("Error sending message");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;

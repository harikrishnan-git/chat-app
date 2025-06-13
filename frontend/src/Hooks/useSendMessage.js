import { useState } from "react";
import useConversationStore from "../zustand/useConversationStore";
import axios from "axios";

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
      const response = await axios.post("/api/messages", {
        conversationId: selectedConversation.id,
        content: msg,
      });

      if (response.data.success) {
        // Update messages in the store
        setMessages([...messages, response.data.message]);
      } else {
        toast.error("Failed to send message");
        console.error("Failed to send message:", response.data.error);
      }
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

import { useState, useEffect } from "react";
import useConversationStore from "../zustand/useConversationStore";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } =
    useConversationStore();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/message/${selectedConversation._id}`);
        setMessages(res.data);
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading, selectedConversation };
};

export default useGetMessages;

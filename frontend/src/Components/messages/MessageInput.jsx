import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return; // Prevent sending empty messages
    sendMessage(message);
    setMessage(""); // Clear input after sending
  };
  return (
    <div className="">
      <form action="" method="post" className="flex m-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
          placeholder="Enter your message"
          className="input input-bordered input-primary flex-1"
        />
        <button
          className="btn btn-primary rounded px-2 ml-1"
          onClick={(e) => {
            handleSubmit(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent form submission on Enter key
              handleSubmit(e);
            }
          }}
          type="submit"
          disabled={loading}
        >
          <IoIosSend className="h-8 w-8" />
        </button>
      </form>
    </div>
  );
}

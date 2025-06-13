import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import useConversationStore from "../../zustand/useConversationStore";
import useGetConversations from "../../Hooks/useGetConversation";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedConversation } = useConversationStore();
  const { conversations } = useGetConversations();

  const handleSearch = () => {
    // Simulate a search operation
    const foundConversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundConversation) {
      setSelectedConversation(foundConversation);
      setSearchTerm("");
    } else {
      toast.error("No conversation found");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="Search..."
        className="input input-bordered input-primary"
      />
      <button onClick={handleSearch} type="submit" className="btn btn-primary">
        <IoSearchSharp />
      </button>
    </div>
  );
}

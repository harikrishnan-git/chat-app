import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import useConversationStore from "../../zustand/useConversationStore";

export default function Messages() {
  const { loading } = useGetMessages();
  const messages = useConversationStore((state) => state.messages);
  return (
    <div className="flex flex-col flex-1 overflow-auto">
      {loading ? (
        <div className="flex w-52 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      ) : messages === "No messages found" || messages.length === 0 ? (
        <p className="text-center">Send a message to start conversation</p>
      ) : (
        messages.map((msg, idx) => <Message msg={msg} key={msg._id} />)
      )}
    </div>
  );
}

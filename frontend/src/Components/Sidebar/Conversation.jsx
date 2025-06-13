import useConversationStore from "../../zustand/useConversationStore";

export default function Conversation(data) {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();
  const isSelected = selectedConversation?._id === data.data._id;
  return (
    <div className="">
      <div
        className={`p-3 flex hover:bg-sky-500 cursor-pointer rounded-lg ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(data.data);
        }}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={data.data.profilePic} />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 mx-5 text-xl">
              {data.data.fullName}
            </p>
          </div>
        </div>
      </div>
      <div className="divider m-0 h-1"></div>
    </div>
  );
}

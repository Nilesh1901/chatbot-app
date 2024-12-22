import React from "react";

function ChatInputSection({ input, handleSend, setInput }) {
  return (
    <form action="">
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-md"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ChatInputSection;

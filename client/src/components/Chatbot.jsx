import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ChatInputSection from "./ChatInputSection";
import UserAndBotReply from "./UserAndBotReply";
import InitialCategoryOptions from "./InitialCategoryOptions";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const chatHistoryRef = useRef(null);

  function scrollBottom() {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  const handleSend = async (e, category) => {
    e.preventDefault();
    if (input.trim() === "" && !category) return;

    const query = input.trim() === "" ? category : input;

    // Add user message to the chat
    setMessages([...messages, { text: query, sender: "user" }]);
    setInput("");
    setError(""); // Reset error state
    setLoading(true); // Set loading state

    try {
      const response = await axios.get(
        "http://localhost:3000/api/products/search",
        {
          params: { searchTerm: query },
          headers: {
            Authorization: authToken || "",
          },
          withCredentials: true,
        }
      );

      const result = response.data;
      const botMessage = result.length ? result : "No products found.";

      setMessages((prev) => [...prev, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      setError("Oops! Something went wrong. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-4">
        E-commerce Chatbot
      </h1>
      <div className="chatbot bg-gray-100 p-4 rounded-md max-w-lg h-[30rem] mx-auto mt-10 shadow-lg">
        <div
          ref={chatHistoryRef}
          className="chat-history h-96 overflow-y-auto p-2 border border-gray-300 rounded-md"
        >
          {!messages.length && (
            <InitialCategoryOptions handleSend={handleSend} />
          )}
          {messages.map((msg, idx) => (
            <UserAndBotReply key={idx} msg={msg} />
          ))}
          {loading && (
            <div className="loading text-center text-blue-500 mt-2">
              Loading...
            </div>
          )}
        </div>
        {error && (
          <div className="error text-center text-red-500 mt-2">{error}</div>
        )}
        <ChatInputSection
          input={input}
          handleSend={handleSend}
          setInput={setInput}
        />
      </div>
    </>
  );
};

export default Chatbot;

import React from "react";

function BotTextReply({ text }) {
  return (
    <span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black mb-2">
      {text}
    </span>
  );
}

export default BotTextReply;

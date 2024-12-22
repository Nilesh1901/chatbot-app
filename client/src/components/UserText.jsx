import React from "react";

function UserText({ text }) {
  return (
    <span
      className={`inline-block px-3 py-2 rounded-lg bg-blue-500 text-white`}
    >
      {text}
    </span>
  );
}

export default UserText;

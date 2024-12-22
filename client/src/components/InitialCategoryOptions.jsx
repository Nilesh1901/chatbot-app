import axios from "axios";
import React, { useEffect, useState } from "react";
import BotTextReply from "./BotTextReply";

function InitialCategoryOptions({ handleSend }) {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    async function fetchCatagorys() {
      const res = await axios.get("http://localhost:3000/api/products");
      const uniqueCategories = [...new Set(res.data.map((p) => p.category))];
      setCategorys(uniqueCategories);
    }
    fetchCatagorys();
  }, []);

  return (
    <div className="w-80 gap-1 flex flex-wrap">
      {categorys.map((category, idx) => (
        <button key={idx} onClick={(e) => handleSend(e, category)}>
          <BotTextReply text={category} />
        </button>
      ))}
    </div>
  );
}

export default InitialCategoryOptions;

import axios from "axios";
import React, { useEffect, useState } from "react";

function BotReplay({ text }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=BcudH7iwR9C0vP3w1VZZYSY7B4Xeimi7kqG_i-o0R1A&query=${text.name}&per_page=1`
        );
        if (res.data.results.length > 0 && res.data.results[0].urls.regular) {
          setImage(res.data.results[0].urls.regular);
        } else {
          setImage("https://via.placeholder.com/300");
        }
      } catch (error) {
        setError("Image not available.");
        setImage("https://via.placeholder.com/300");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [text.name]);

  return (
    <div className="w-52 h-[16.5rem] cursor-pointer p-4 shadow-lg rounded-md bg-white flex flex-col">
      {loading ? (
        <div className="w-full h-32 bg-gray-300 animate-pulse rounded-lg" /> // Loading placeholder
      ) : error ? (
        <div className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">{error}</span>
        </div>
      ) : (
        <img
          src={image}
          alt={text.name}
          className="rounded-lg w-full h-32 object-cover mb-2"
        />
      )}
      <div className="card-body flex flex-col space-y-1">
        <h3 className="font-medium text-lg">{text.name}</h3>
        <p className="text-sm font-light text-gray-700">{text.category}</p>
        <p className="text-sm text-gray-900">₹ {text.price}</p>
      </div>
    </div>
  );
}

export default BotReplay;

import React from "react";
import BotReplay from "./BotProductsReply";
import UserText from "./UserText";
import BotTextReply from "./BotTextReply";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserAndBotReply({ msg }) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div
      className={`message py-2 ${
        msg.sender === "user" ? "text-right" : "text-left"
      }`}
    >
      {msg.sender === "user" ? (
        <UserText text={msg.text} />
      ) : Array.isArray(msg.text) && msg.text.length > 0 ? (
        <>
          <BotTextReply text="Here are your searched results:" />
          {msg.text.length > 1 ? (
            <Slider {...sliderSettings} className="overflow-hidden mt-3">
              {msg.text.map((result) => (
                <div key={result.name} className="px-2">
                  <BotReplay text={result} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="">
              <BotReplay key={msg.text[0].name} text={msg.text[0]} />
            </div>
          )}
        </>
      ) : (
        <BotTextReply text={msg.text} />
      )}
    </div>
  );
}

export default UserAndBotReply;

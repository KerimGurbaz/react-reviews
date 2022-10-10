import React from "react";
import cardStyle from "./card.module.css";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        const { image, id, job, text, name } = item;
        return (
          <div key={id} className={cardStyle.container}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import axios from "axios";
import "./styles/cards.scss";
import Answer from "./Answer";

export default function ItemsList({ pokeItem }) {
  const [answer, setAnswer] = useState();

  return (
    <div>
      {answer ? (
        <Answer answer={answer} />
      ) : (
        <div className="containerB">
          <h4>Choose a berry to know the effect.</h4>
        </div>
      )}
      <div className="generalContainer">
        {pokeItem.map((item) => (
          <div
            className="styleFrontCard"
            key={item}
            onClick={() => {
              axios
                .get(`https://pokeapi.co/api/v2/berry/${item}`)
                .then((res) => {
                  console.log(res.data.item.url);
                  setAnswer(res.data.item.url);
                });
            }}
          >
            <h1>{item}</h1>
            <h6>Check me!</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

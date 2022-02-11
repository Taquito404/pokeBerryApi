import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/answerStyle.scss";

export default function Answer({ answer }) {
  const [effect, setEffect] = useState();

  useEffect(() => {
    axios.get(answer).then((res) => {
      console.log(res.data.effect_entries[0].effect);
      setEffect(res.data.effect_entries[0].effect);
    });
  }, [answer]);

  return (
    <div className="container">
      <h5>Answer: </h5>
      <h6>{effect}</h6>
    </div>
  );
}

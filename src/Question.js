import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false);

  const showAndHide = () => {
    setShow(!show);
  };

  return (
    <article className="question" key={id}>
      <header>
        <h4 className="header">{title}</h4>
        <button
          className="btn"
          onClick={() => {
            showAndHide();
          }}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;

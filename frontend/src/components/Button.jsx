import React from "react";
import "../App.css";
import "../index.css";

function Button({ text = "Success", onClick }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
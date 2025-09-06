import React from "react";
import "../App.css";
import "../index.css";

function SmallButton({ text = "Success", onClick }) {
  return (
    <button className="small-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default SmallButton;
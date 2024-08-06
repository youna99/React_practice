import React, { useState } from "react";
import ColorList from "./ColorList";

function Select() {
  const [color, setColor] = useState("red");

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  const getImg = (color) => {
    switch (color) {
      case "red":
        return "/img/red.png";
      case "yellow":
        return "/img/yellow.webp";
      case "green":
        return "/img/green.jpg";
      case "blue":
        return "/img/blue.webp";
      default:
        return "";
    }
  };
  return (
    <div>
      <form>
        <label>색상 : </label>
        <ColorList color={(e) => onChangeColor(e, setColor)} />
      </form>
      <img src={getImg(color)} alt={color} style={{ width: "200px" }} />
    </div>
  );
}

export default Select;

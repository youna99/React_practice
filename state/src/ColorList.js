import React from "react";

export default function ColorList(props) {
  console.log(props);

  return (
    <div>
      <select onChange={props.color}>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
      </select>
    </div>
  );
}

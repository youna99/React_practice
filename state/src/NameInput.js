import React, { useState } from "react";

function NameInput() {
  const [first, setFirst] = useState("");
  const [name, setName] = useState("");

  const onReset = () => {
    setFirst("");
    setName("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="성"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <h2>
        Hi, {first} {name}
      </h2>
      <button onClick={onReset}>리셋</button>
    </div>
  );
}

export default NameInput;

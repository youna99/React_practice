import React, { useReducer, useState } from "react";

const initalState = { value: 0 };

const bankReducer = (state, action) => {
  console.log("state >>>", state);
  console.log("action >>>", action);

  switch (action.type) {
    case "plus": {
      return { value: state.value + action.value };
    }
    case "minus": {
      return { value: state.value - action.value };
    }
    default: {
      return { state };
    }
  }
};

function Bank() {
  const [money, setMoney] = useState("");
  const [state, dispatch] = useReducer(bankReducer, initalState);

  const onPlus = (e) => {
    dispatch({ type: "plus", value: money });
    setMoney("");
  };
  const onMinus = (e) => {
    dispatch({ type: "minus", value: money });
    setMoney("");
  };
  return (
    <div>
      <h2>짱구 은행</h2>
      <div>잔고: {state.value}</div>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(parseInt(e.target.value))}
      />
      <button onClick={onPlus}>입금</button>
      <button onClick={onMinus}>출금</button>
    </div>
  );
}

export default Bank;

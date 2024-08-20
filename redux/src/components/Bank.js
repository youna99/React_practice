import React from "react";

// prop 사용
export default function Bank({ value, bank, onPlus, onMinus, onchange }) {
  return (
    <div>
      <h3>usereducer를 redux로 리팩토링</h3>
      <h2>짱구 은행</h2>
      <h3>잔고: {bank}</h3>
      <input type="text" value={value} onChange={onchange} />
      <button onClick={onPlus}>입금</button>
      <button onClick={onMinus}>출금</button>
    </div>
  );
}

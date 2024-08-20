import React, { useState } from "react";
import Bank from "../components/Bank";
import { useDispatch, useSelector } from "react-redux";
import { bankPlus, bankMinus } from "../store/bankSlice";

// 4. useSelector, useDispatch 사용
export default function BankContainer() {
  const bank = useSelector((state) => state.bank.number);
  console.log("bank >>>", bank);
  const dispatch = useDispatch();

  const [money, setMoney] = useState("");

  const onClickPlus = () => {
    dispatch(bankPlus(money));
    setMoney("");
  };

  const onClickMinus = () => {
    dispatch(bankMinus(money));
    setMoney("");
  };

  const onchangeMoney = (e) => {
    setMoney(Number(e.target.value));
  };

  return (
    <div>
      {/* 컨테이너 컴포넌트에서 프레젠테이셔널 컴포넌트로 prop 전달 */}
      <Bank
        bank={bank}
        onPlus={onClickPlus}
        onMinus={onClickMinus}
        value={money}
        onchange={onchangeMoney}
      />
    </div>
  );
}

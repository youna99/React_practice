import React, { useState } from "react";

function Message() {
  const [message, setMessage] = useState("");
  const [isresult, setIsresult] = useState(false);

  if (isresult) {
    return <h2>반가워~</h2>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Send: ${message}`);
          setMessage("");
          setIsresult(true);
        }}
      >
        <textarea
          placeholder="메시지를 입력하세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>{" "}
        <br />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default Message;

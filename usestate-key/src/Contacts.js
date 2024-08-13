import React, { useState } from "react";

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

function Contacts() {
  const [expandedId, setExpandedId] = useState(null); // 현재 확장된 연락처의 ID를 관리
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  const handleExpand = (id) => {
    // 같은 ID가 클릭되면 null로 설정하여 이메일을 숨김
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <p>
              <b>{contact.name}</b>
            </p>
            {/* 확장된 상태가 현재 연락처 ID와 일치하면 이메일을 표시 */}
            {expandedId === contact.id && (
              <p>
                <i>{contact.email}</i>
              </p>
            )}
            <button onClick={() => handleExpand(contact.id)}>
              {expandedId === contact.id ? "Hide" : "Show"} email
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;

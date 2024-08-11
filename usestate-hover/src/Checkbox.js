import React, { useState } from "react";

const initialLetters = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

function Inbox() {
  const [letters, setLetters] = useState(initialLetters);
  const [selectedIds, setSelectedIds] = useState(new Set()); // 중복 제거된 id

  // 선택된 항목의 수 계산
  // size: 요소의 개수 반환(length와 같음.)
  const selectedCount = selectedIds.size;

  // 체크박스 토글
  const handleToggle = (toggledId) => {
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      // has(): 특정 요소의 존재 여부 확인, boolean값으로 반환
      nextIds.delete(toggledId);
      // delete(): 특정 요소 삭제
    } else {
      nextIds.add(toggledId);
      // add(): 새로운 요소 추가, 중복 요소 추가 X
    }
    // +) clear(): 모든 요소 삭제
    setSelectedIds(nextIds);
  };

  // 체크박스 변경
  const handleCheckboxChange = (id) => {
    setLetters((prevLetters) =>
      prevLetters.map((letter) =>
        letter.id === id ? { ...letter, isStarred: !letter.isStarred } : letter
      )
    );
    handleToggle(id);
  };
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <li
            key={letter.id}
            style={{
              backgroundColor: selectedIds.has(letter.id)
                ? // selectedIds에 letter.id가 존재하면 true 반환, 없으면 false 반환
                  "lightblue"
                : "white",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              id={letter.id}
              checked={selectedIds.has(letter.id)}
              onChange={() => handleCheckboxChange(letter.id)}
            />
            <label htmlFor={letter.id}>{letter.subject}</label>
          </li>
        ))}
      </ul>
      <h2>You selected {selectedCount} letters</h2>
    </>
  );
}

export default Inbox;

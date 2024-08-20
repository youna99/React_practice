import React from "react";

export default function Liked({ onLiked, likedCount, liked, list }) {
  return (
    <>
      <h1>"좋아요 만들어보기"</h1>
      {list.map((list) => (
        <div key={list.id}>
          <div>
            <h3>{list.title}</h3>
            <img
              style={{ width: "100px", height: "auto" }}
              src={liked[list.id] ? "/likedFull.png" : "/liked.png"}
              alt="좋아요"
              onClick={() => onLiked(list.id)}
            />
            {/* <span>좋아요 수: {likedCount}</span> */}
          </div>
        </div>
      ))}
    </>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLiked } from "../store/LikedSlice";
import Liked from "../components/Liked";

const list = [
  {
    id: 1,
    title: "좋아요1",
  },
  {
    id: 2,
    title: "좋아요2",
  },
  {
    id: 3,
    title: "좋아요3",
  },
  {
    id: 4,
    title: "좋아요4",
  },
  {
    id: 5,
    title: "좋아요5",
  },
];

// 4. useSelector, useDispatch 사용
export default function LikedContainer() {
  const liked = useSelector((state) => state.liked);
  console.log("liked >>>", liked);

  const dispatch = useDispatch();

  //   const [likedCount, setLikedCount] = useState(0);
  //   console.log("likedCount >>", likedCount);

  const onClickLiked = (id) => {
    dispatch(changeLiked(id));
    // if (liked[id]) {
    //   if (likedCount > 0) {
    //     setLikedCount(likedCount - 1);
    //   }
    // } else {
    //   setLikedCount(likedCount + 1);
    // }
  };
  return (
    <>
      <Liked
        onLiked={onClickLiked}
        // likedCount={likedCount}
        liked={liked}
        list={list}
      />
    </>
  );
}

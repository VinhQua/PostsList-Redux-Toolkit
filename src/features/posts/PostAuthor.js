import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const author = users.find((user) => {
    console.log(user);
    console.log("userID:" + userId);
    if (user.id === Number(userId)) {
      return user;
    }
  });

  return <span>by {author ? author.name : `Unknown author`} </span>;
};

export default PostAuthor;

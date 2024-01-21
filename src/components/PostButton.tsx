"use client";

export const PostButton = () => {
  const handleClick = async () => {
    console.log("clicked");
    const post = async () => {
      const response = await fetch("api/tasks", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify({
        //   userId,
        //   password,
        // }),
      });
      return response;
    };
    const res = await post();
    console.log(res);
  };
  return <button onClick={handleClick}>post</button>;
};

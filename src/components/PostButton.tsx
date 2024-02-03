"use client";

export const PostButton = () => {
  const handleClick = async () => {
    console.log("clicked");
    const post = async () => {
      const response = await fetch("api/tasks", {
        // method: "GE",
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
    const data = await res.json();
    console.log(data);
  };
  return <button onClick={handleClick}>post</button>;
};

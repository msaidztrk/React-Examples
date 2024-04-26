import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    (async () => {
      await fetch("http://127.0.0.1:8000/api/user", {
        method : "GET",
        headers: { "Content-Type": "application/json" , "Accept" :"application/json" },
        credentials: "include",
      });
    })();
  });

  return <div>Home</div>;
};

export default Home;

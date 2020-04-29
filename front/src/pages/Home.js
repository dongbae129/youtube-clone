import React, { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    axios
      .post("/api/hello", {
        nickname: "aaa",
        userId: "AAA",
        password: "123",
      })
      .then((res) => console.log(res));
  }, []);
  return <div>This is Home</div>;
}

export default Home;

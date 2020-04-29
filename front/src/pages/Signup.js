import React, { useEffect } from "react";
import axios from "axios";
function Signup() {
  useEffect(() => {
    axios.post("/api/user/login", { qq: "QQ" }).then((res) => console.log(res));
  }, []);
  return <div>This is Signup</div>;
}

export default Signup;

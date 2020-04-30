import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import styled from "styled-components";
import Upload from "./pages/Upload";

const AppLi = styled.li`
  margin-right: 10px;
  font-size: 20px;

  list-style-type: none;
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <ul style={{ display: "flex" }}>
        <AppLi>
          <Link to="/">Home</Link>
        </AppLi>
        <AppLi>
          <Link to="/login">login</Link>
        </AppLi>
        <AppLi>
          <Link to="/signup">signup</Link>
        </AppLi>
        <AppLi>
          <Link to="/product/upload">Upload</Link>
        </AppLi>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/product/upload" component={Upload} />
    </BrowserRouter>
  );
}

export default App;

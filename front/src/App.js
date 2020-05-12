import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import styled from "styled-components";
import Upload from "./pages/Upload";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { GET_USER_REQUEST } from "./reducers/user";
import DetailProduct from "./pages/DetailProduct";
import CountMain from "./pages/CountMain";
import { useSelector, useDispatch } from "react-redux";

const AppLi = styled.li`
  margin-right: 1.5rem;
  font-size: 2rem;

  list-style-type: none;
  a {
    text-decoration: none;
  }
`;

function App() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USER_REQUEST,
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ul style={{ display: "flex", marginBottom: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            marginRight: "2rem",
          }}
        >
          <Badge count={me && me.Carts && me.Carts.length}>
            <Link to="/count/main">
              <ShoppingCartOutlined style={{ fontSize: "1.5rem" }} />
            </Link>
          </Badge>
        </div>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/count/main" component={() => <CountMain me={me} />} />
      <Switch>
        <Route path="/product/upload/" component={Upload} />
        <Route path="/product/:productId" component={DetailProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

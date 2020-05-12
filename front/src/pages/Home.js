import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/product";
import ProductCard from "../components/ProductCard";
import { Button, Row, Col } from "antd";
import CheckBox from "../components/CheckBox";
import RadioBox from "../components/RadioBox";
import SearchInput from "../components/SearchInput";
import { GET_USER_REQUEST } from "../reducers/user";

function Home() {
  const dispatch = useDispatch();
  const [pageClick, setPageClick] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [search, setSearch] = useState("");
  const { mainPosts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
    dispatch({ type: GET_USER_REQUEST });
  }, [dispatch]);

  const PageNum = mainPosts.length / 4;

  const onChangePage = (e) => {
    let target = e.target;
    setPageClick(true);
    setStart((target.value - 1) * 4);
    setEnd(target.value * 4 - 1);
  };

  const refreshSearch = (childSearch) => {
    setSearch(childSearch);
  };
  return (
    <div style={{ width: "80%", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Choose Product!!! </h2>
      </div>
      <Row gutter={[16, 16]}>
        <Col lg={12}>
          <CheckBox />
        </Col>
        <Col lg={12}>
          <RadioBox />
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchInput refresh={refreshSearch} />
      </div>

      <ProductCard start={start} end={end} />
      <ul
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",

          bottom: "0",
          padding: "0",
          justifyContent: "center",
        }}
      >
        {Array(Math.ceil(PageNum))
          .fill(1)
          .map((v, i) => (
            <Button
              style={{ marginRight: "10px" }}
              value={i + 1}
              key={i}
              onClick={onChangePage}
            >
              {i + 1}
            </Button>
          ))}
      </ul>
    </div>
  );
}

export default Home;

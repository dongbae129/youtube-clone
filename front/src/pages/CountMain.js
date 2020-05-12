import React from "react";
import { Table, Divider } from "antd";

const columns = [
  { title: "", dataIndex: "img", key: "img" },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
];
const funcColumns = (cart) => {
  let data = [];
  cart.forEach((v, i) =>
    data.push({
      key: i,
      img: (
        <img
          style={{ width: "120px", height: "120px" }}
          alt={v.image}
          src={`http://localhost:5000/${v.image}`}
        />
      ),
      title: v.title,
      price: v.price,
      number: v.number,
    })
  );

  return data;
};
const addPrice = (data) => {
  let Price = 0;
  data.map((v) => (Price += parseInt(v.price, 10)));
  console.log(Price);
  return Price;
};
const CountMain = ({ me }) => {
  let data = [];
  let priceData = 0;
  if (me && me.Carts) {
    funcColumns(me.Carts).map((v) => data.push(v));
    priceData = addPrice(me.Carts);
  }

  return (
    <div>
      <Table pagination={false} dataSource={data} columns={columns} />
      <div
        style={{
          width: "200px",
          border: "1px solid black",
          float: "right",
          margin: "10px 20px",
          padding: "20px",
        }}
      >
        <p>결제금액</p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0",
            height: "100px",
          }}
        >
          {me && priceData}원
        </p>
        <Divider />
      </div>
    </div>
  );
};

export default CountMain;

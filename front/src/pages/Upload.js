import React, { useState, useEffect } from "react";

import { Typography, Input, Button } from "antd";
import FileUpload from "../components/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { UPLOAD_PRODUCT_REQUEST } from "../reducers/product";

const { Title } = Typography;
const { TextArea } = Input;

export const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function Upload(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [continent, setContinent] = useState("");
  const [image, setImage] = useState([]);
  const { imagePaths, uploadSuccess } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    setImage([...imagePaths]);
  }, [imagePaths]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDes = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: UPLOAD_PRODUCT_REQUEST,
      data: { name, description, price, continent, image },
    });
    if (uploadSuccess) {
      props.history.push("/");
    }

    console.log(name, description, price, image, continent);
  };
  const onChangeContinent = (e) => {
    setContinent(e.target.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title>여행 상품 업로드</Title>
      </div>
      <form action="#" onSubmit={onSubmitForm}>
        <FileUpload />
        <br />
        <br />
        <label htmlFor="name">이름</label>
        <Input
          required
          id="name"
          type="text"
          onChange={onChangeName}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="description">설명</label>
        <TextArea
          id="description"
          type="text"
          onChange={onChangeDes}
          value={description}
        />
        <br />
        <br />
        <label htmlFor="price">가격</label>
        <Input id="price" type="text" onChange={onChangePrice} value={price} />
        <br />
        <br />
        <select defaultValue="Africa" onChange={onChangeContinent}>
          {Continents.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button htmlType="submit">확인</Button>
      </form>
    </div>
  );
}

export default Upload;

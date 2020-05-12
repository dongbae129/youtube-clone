import React from "react";
import { Descriptions, Button } from "antd";
import { useDispatch } from "react-redux";
import { UPLOAD_CART_REQUEST } from "../reducers/product";
function DetailProInfo({ props, pro }) {
  const product = pro;
  // const { me } = useSelector((state) => state.user);
  // const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const sendProductInfo = () => {
    dispatch({
      type: UPLOAD_CART_REQUEST,
      data: {
        title: product.title,
        price: product.price,
        num: 1,
        img: product.Images[0],
      },
    });
  };
  // useEffect(() => {

  // }, [dispatch]);

  return (
    <div>
      <Descriptions
        style={{ textAlign: "center", marginBottom: "3rem" }}
        title="Product Info"
        bordered
      >
        <Descriptions.Item label="Product">
          {product && product.title}
        </Descriptions.Item>
        <Descriptions.Item label="Price">
          {product && product.price}
        </Descriptions.Item>
        <Descriptions.Item label="Continent">
          {product && product.continent}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {product && product.description}
        </Descriptions.Item>
      </Descriptions>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={sendProductInfo} size="large" danger>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default DetailProInfo;

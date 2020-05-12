import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DETAIL_PRODUCT_REQUEST } from "../reducers/product";
import { Row, Col } from "antd";
import DetailProImage from "../components/DetailProImage";
import DetailProInfo from "../components/DetailProInfo";
function DetailProduct(props) {
  const productId = props.match.params.productId;
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_PRODUCT_REQUEST,
      data: productId,
    });
  }, [dispatch, productId]);
  return (
    <div style={{ width: "100%" }}>
      {/* Detail,{match.params.productId} */}
      <h2 style={{ textAlign: "center" }}>{product && product.id}</h2>
      <Row gutter={[16, 16]} style={{ margin: "15px" }}>
        <Col lg={12} xs={24}>
          <DetailProImage product={product} />
        </Col>
        <Col lg={12} xs={24}>
          <DetailProInfo props={props} pro={product} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;

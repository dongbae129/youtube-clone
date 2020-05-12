import React from "react";
import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
const { Meta } = Card;
function ProductCard({ start, end }) {
  const { mainPosts } = useSelector((state) => state.product);

  return (
    <div>
      <Row gutter={(16, 16)}>
        {mainPosts.slice(start, end + 1).map((v, i) => (
          <Col lg={6} md={8} xs={24} key={i}>
            <Card
              style={{ marginBottom: "15px" }}
              cover={
                <Link to={`/product/${v.id}`}>
                  <ImageSlider image={v.Images} />
                </Link>
              }
            >
              <Meta title={v.title} description={v.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCard;

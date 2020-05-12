import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel>
        {props.image.map((v, i) => (
          <div key={i}>
            <img
              style={{ width: "100%" }}
              alt="post"
              src={`http://localhost:5000/${v.src}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;

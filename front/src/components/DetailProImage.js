import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";

function DetailProImage({ product }) {
  //   const { product } = useSelector((state) => state.product);
  const images = [];
  useEffect(() => {
    if (product && product.Images) {
      product.Images.map((v) => {
        images.push({
          original: `http://localhost:5000/${v.src}`,
          thumbnail: `http://localhost:5000/${v.src}`,
        });
      });
    }
  }, [images, product]);
  return (
    <div>
      <ImageGallery showPlayButton={false} items={images} />
    </div>
  );
}

export default DetailProImage;

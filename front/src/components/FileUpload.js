import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_IMAGE_REQUEST, REMOVE_IMAGE } from "../reducers/product";

function FileUpload() {
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.product);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", acceptedFiles[0]);

      dispatch({
        type: UPLOAD_IMAGE_REQUEST,
        data: formData,
        config,
      });

      // aixos.post("/api/product/image", formData, config).then((res) => {
      //   console.log(res.data, "***(*(");
      // });
    },
    [dispatch]
  );

  const onClickRemoveImg = (e) => {
    dispatch({
      type: REMOVE_IMAGE,
      data: imagePaths.indexOf(e.target.alt),
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          width: "300px",
          height: "200px",
          fontSize: "3rem",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p></p>
        ) : (
          <p style={{ margin: 0 }}>
            <FiPlus />
          </p>
        )}
      </div>
      <div
        onClick={onClickRemoveImg}
        style={{
          display: "flex",
          width: "500px",
          height: "200px",
          overflowX: "scroll",
        }}
      >
        {imagePaths.map((image, index) => (
          <div key={index}>
            <img
              key={index}
              src={`http://localhost:5000/${image}`}
              alt={image}
              style={{
                width: "300px",
                height: "200px",
                marginRight: "10px",
                padding: "5px",
                border: "1px solid black",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;

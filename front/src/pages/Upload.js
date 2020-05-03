import React from "react";
import styled from "styled-components";

function Upload() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>여행 상품 업로드</h2>
      </div>
      <form action="#">
        <br />
        <br />
        <label htmlFor="name">이름</label>
        <input id="name" type="text" />
        <br />
        <br />
        <label htmlFor="description">설명</label>
        <textarea id="description" type="text" />
        <br />
        <br />
        <label htmlFor="price">가격</label>
        <input id="price" type="text" />
        <br />
        <br />
        <select name="" id="">
          <option value=""></option>
        </select>
        <br />
        <br />
        <button>확인</button>
      </form>
    </div>
  );
}

export default Upload;

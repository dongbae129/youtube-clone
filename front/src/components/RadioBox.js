import React, { useState } from "react";
import { Collapse, Checkbox, Row, Col, Radio } from "antd";
const { Panel } = Collapse;

const Product_Price = [
  {
    id: 0,
    name: "Any",
    array: [],
  },
  {
    id: 1,
    name: "$ 0 to 199",
    array: [0, 199],
  },
  {
    id: 2,
    name: "$200 to 249",
    array: [200, 249],
  },
  {
    id: 3,
    name: "$250 to 279",
    array: [250, 279],
  },
  {
    id: 4,
    name: "$280 to 329",
    array: [280, 329],
  },
];

function RadioBox() {
  const [Value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const renderCheckbox = () =>
    Product_Price.map((v, i) => (
      <Col span={8} key={i}>
        <Radio value={v.id} key={i}>
          {v.name}
        </Radio>
      </Col>
    ));
  return (
    <div>
      <Collapse>
        <Panel header="Price">
          <Radio.Group onChange={handleChange} value={Value}>
            <Row>{renderCheckbox()}</Row>
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;

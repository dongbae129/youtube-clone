import React, { useState } from "react";
import { Continents } from "../pages/Upload";
import { Collapse, Checkbox, Row, Col } from "antd";
import CheckboxGroup from "antd/lib/checkbox/Group";

const { Panel } = Collapse;

function CheckBox() {
  const [checked, setChecked] = useState([]);
  const funcCheck = (e) => {
    if (e.target.checked) {
      checked.push(e.target.id);
      console.log(checked, "111");
    } else {
      checked.splice(checked.indexOf(e.target.id), 1);
      console.log(checked, "222");
    }
  };
  const renderCheckbox = () =>
    Continents.map((v, i) => (
      <Col span={8} key={i}>
        <Checkbox onClick={funcCheck} id={v.value} key={i}>
          {v.value}
        </Checkbox>
      </Col>
    ));

  return (
    <div>
      <Collapse>
        <Panel header="Continent">
          <CheckboxGroup>
            <Row> {renderCheckbox()}</Row>
          </CheckboxGroup>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;

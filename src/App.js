import { Form, Button } from "antd";
import { useState, useEffect } from "react";

import "./App.css";
import Section from "./components/Section";
import { sortData } from "./constant";

const metadata = require("./metadata.json");

function App() {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [submittable, setSubmittable] = useState(false);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  const onFinish = (values) => {
    console.log(values);
  };
  const newSections = sortData(metadata.modal);
  return (
    <div className="App">
      <Form form={form} onFinish={onFinish} layout="vertical">
        {newSections.map((section, index) => (
          <Section data={section} />
        ))}
        <div className="submitBtn">
          <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;

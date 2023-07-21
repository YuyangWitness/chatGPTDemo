import { Form, Input, Button, Radio } from "antd";

import { MESSAGE_MAP } from "../../constant";

const { TextArea } = Input;

export default function Field({ data }) {
  const { key, type, label, rule, options } = data;

  const renderField = (type, options) => {
    switch (type) {
      case "input":
        return <Input />;
      case "textbox":
        return <TextArea />;
      case "button":
        return <Button />;
      case "radio":
        return (
          <Radio.Group>
            {options.map((option, index) => {
              return <Radio value={option.value}>{option.label}</Radio>;
            })}
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        );
      default:
        break;
    }
  };

  const handleRule = (rule) => {
    if (rule) {
      const keys = Object.keys(rule);
      const validation = keys.map((key) => {
        switch (key) {
          case "required":
            return {
              required: rule[key],
              message: MESSAGE_MAP(rule[key])[key],
            };
          case "minLength":
            return {
              min: rule[key],
              message: MESSAGE_MAP(rule[key])[key],
            };
          case "maxLength":
            return {
              max: rule[key],
              message: MESSAGE_MAP(rule[key])[key],
            };
          default:
            break;
        }
      });

      return validation;
    }
  };

  return (
    <div>
      <Form.Item label={label} name={key} rules={handleRule(rule)}>
        {renderField(type, options)}
      </Form.Item>
    </div>
  );
}

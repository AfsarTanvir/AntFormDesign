import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function EmailComponent({ field }: { field: FieldsType }) {
  
  return (
    <Form.Item
      name={field.name}
      label={field.label}
      id={field.id}
      rules={buildValidationRules(field.validations)}
      hasFeedback
      tooltip="example@gmail.com"
    >
      <Input
        type="email"
        placeholder={field.placeholder}
        onChange={(e) => {
          console.log("user typed: ", e.target.value);

        }}
      />
    </Form.Item>
  );
}

export default EmailComponent;

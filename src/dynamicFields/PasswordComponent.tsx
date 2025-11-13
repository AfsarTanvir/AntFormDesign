import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function PasswordComponent({ field }: { field: FieldsType }) {

  return (
    <Form.Item
      name={field.name}
      label={field.label}
      id={field.id}
      rules={buildValidationRules(field.validations)}
      hasFeedback
    >
      <Input.Password placeholder={field.placeholder} />
    </Form.Item>
  );
}
export default PasswordComponent;

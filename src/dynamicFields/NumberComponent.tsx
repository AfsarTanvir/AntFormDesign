import { Form, InputNumber } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function NumberComponent({ field }: { field: FieldsType }) {

  return (
    <Form.Item
      name={field.id}
      label={field.label}
      rules={buildValidationRules(field.validations)}
    >
      <InputNumber placeholder={field.placeholder} style={{ width: "100%" }} />
    </Form.Item>
  );
}

export default NumberComponent;

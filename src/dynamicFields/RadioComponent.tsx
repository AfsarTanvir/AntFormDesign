import { Form, Radio } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function RadioComponent({ field }: { field: FieldsType }) {
  return (
    <Form.Item
      id={field.id}
      name={field.name}
      label={field.label}
      rules={buildValidationRules(field.validations)}
    >
      <Radio.Group>
        {field.options?.map((op) => (
          <Radio key={op.value} value={op.value}>
            {op.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}

export default RadioComponent;

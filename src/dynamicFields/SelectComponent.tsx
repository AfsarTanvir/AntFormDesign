import { Form, Select } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";
import { useConditionalField } from "./hook/useConditionalField";

function SelectComponent({ field }: { field: FieldsType }) {
  const { shouldShow } = useConditionalField(field);

  if(!shouldShow){
    return null;
  }

  return (
    <Form.Item
      name={field.name}
      label={field.label}
      id={field.id}
      rules={buildValidationRules(field.validations)}
      hasFeedback
    >
      <Select placeholder={field.placeholder}>
        {field.options?.map((op) => (
          <Select.Option key={op.value} value={op.value}>
            {op.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SelectComponent;

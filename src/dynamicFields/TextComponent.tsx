import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";
import { useConditionalField } from "./hook/useConditionalField";

function TextComponent({ field }: { field: FieldsType }) {
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
      <Input placeholder={field.placeholder} />
    </Form.Item>
  );
}

export default TextComponent;

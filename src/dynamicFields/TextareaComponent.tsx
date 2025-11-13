import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function TextareaComponent({ field }: { field: FieldsType }) {

  return (
    <>
      <Form.Item
        name={field.id}
        label={field.label}
        rules={buildValidationRules(field.validations)}
      >
        <Input.TextArea placeholder={field.placeholder} />
      </Form.Item>
    </>
  );
}

export default TextareaComponent;

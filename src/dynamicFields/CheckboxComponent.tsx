import '@ant-design/v5-patch-for-react-19';
import type { FieldsType } from "../utils/types";
import { buildValidationRules } from "../utils/validationHelpers";
import { Checkbox, Form } from 'antd';
function CheckboxComponent({ field }: { field: FieldsType }) {
  

  return (
    <Form.Item
      name={field.name}
      rules={buildValidationRules(field.validations)}
      valuePropName="checked"
    >
      <Checkbox>{field.label}</Checkbox>
    </Form.Item>
  );
}

export default CheckboxComponent;

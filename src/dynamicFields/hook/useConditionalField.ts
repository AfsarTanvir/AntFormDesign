import { Form } from "antd";
import { useWatch } from "antd/es/form/Form";
import type { FieldsType } from "../../utils/types";
import { compareValues } from "../../dynamicFields/shared/isShowAble";

export function useConditionalField(field: FieldsType, resetValue?: any) {
  const form = Form.useFormInstance();
  const key = field.condition?.field?.replace(/{{|}}/g, "");

  const dependencyValue = useWatch(key, form);

  let shouldShow = true;

  if (field.condition && key) {
    const currentValue = dependencyValue ?? form.getFieldValue(key);

    shouldShow =
      currentValue &&
      compareValues(
        field.condition.operator,
        field.condition.value,
        currentValue
      );

    if (!shouldShow && form.getFieldValue(field.name) !== undefined) {
      const valueToReset = resetValue !== undefined ? resetValue : undefined;
      form.setFieldValue(field.name, valueToReset);
      form.setFields([{ name: field.name, errors: [] }]);
    }
  }

  return { shouldShow };
}
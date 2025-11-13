import { useMemo } from "react";
import Fields from "../dynamicFields/Fields";
import { Button, Form } from "antd";
import { useFetchData } from "../shared/hooks/useFetchData";

const FormRenderer: React.FC = () => {
  const [form] = Form.useForm();

  const myData = useFetchData();

  const resetAll = () => {
    form.resetFields();
  };

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    resetAll();
  };

  const initialValues = useMemo(() => {
    if (!myData) return {};
    const defaults: Record<string, any> = {};
    myData.fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        defaults[field.name] = field.defaultValue;
      }
    });
    return defaults;
  }, [myData]);

  return (
    <>
      {myData && (
        <Form
          className="card"
          form={form}
          labelCol={{ span: 10 }}
          name={myData.formId}
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleSubmit}
          onFinishFailed={(error) => {
            console.log("Submit Data: (failed)\n", { error });
          }}
        >
          <h2>Title: {myData.title}</h2>
          <h3>Id: {myData.formId}</h3>
          {myData.fields.map((field) => (
            <Fields key={field.id} field={field} />
          ))}

          <Button style={{ margin: "2px" }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button style={{ margin: "2px" }} type="primary" onClick={resetAll}>
            Reset
          </Button>
        </Form>
      )}
    </>
  );
};

export default FormRenderer;

import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
function App() {
  return (
    <>
      <div className="card">
        <header>
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            onFinish={(value) => {
              console.log("Submit Data: ", { value });
            }}
            onFinishFailed={(error) => {
              console.log("Submit Data: (failed)\n", { error });
            }}
          >
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                { required: true, message: "Please enter your name" },
                { whitespace: true },
                { max: 30 },
                {
                  validator: (_, value) => {
                    // If the field is not required and has no value, pass validation
                    if (!value) {
                      return Promise.resolve();
                    }

                    // 1. Trim the value to remove leading/trailing whitespace
                    const trimmedValue = String(value).trim();

                    if (trimmedValue.match(/[0-9]/)) {
                      return Promise.reject(
                        new Error("Name must not contain number.")
                      );
                    }

                    // 2. Check the length of the trimmed value
                    if (trimmedValue.length >= 3) {
                      return Promise.resolve(); // Validation passes
                    }

                    // 3. Return a rejected Promise with the error message
                    return Promise.reject(
                      new Error(
                        "Name must be at least 3 characters long after removing spaces."
                      )
                    );
                  },
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Please enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              extra="example@gmail.com"
              rules={[
                { required: true, message: "Please enter your email." },
                { type: "email", message: "Please enter valid email." },
              ]}
              hasFeedback
            >
              <Input placeholder="Please enter your email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
                { min: 6 },
                {
                  validator: (_, value) =>
                    value &&
                    value.match(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    )
                      ? Promise.resolve()
                      : Promise.reject("Password does not match criteria."),
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Please enter your password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Confirm Password Required." },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password doesn't match.");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            <Form.Item name="gender" label="Gender" required>
              <Select placeholder="Select your gender">
                <Select.Option value="male"> Male </Select.Option>
                <Select.Option value="female"> Female </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="country" label="Country" tooltip="optional">
              <Select placeholder="Select your country">
                <Select.Option value="bangladesh"> Bangladesh </Select.Option>
                <Select.Option value="usa"> USA </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="dateOfBirth" label="Date Of Birth">
              <DatePicker
                style={{ width: "100%" }}
                picker="date"
                placeholder="Please enter birth date"
              />
            </Form.Item>

            <Form.Item
              name="website"
              label="Website"
              rules={[{ type: "url", message: "Please enter a valid url" }]}
              hasFeedback
            >
              <Input placeholder="Add your website url" />
            </Form.Item>

            <Form.Item
              name="agreement"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To proceed, you need to agree with our terms and conditions"
                        ),
                },
              ]}
            >
              <Checkbox>
                {" "}
                Agree to our <a href="#">Terms and Conditions</a>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </header>
      </div>
    </>
  );
}

export default App;

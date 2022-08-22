import * as React from "react";
import axios from "axios";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Registration = () => {
  const onFinish = (values: any) => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:80/api/register", values)
        .then((res: any) => {
          console.log(res.data);
        });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <header
        className="lcHeader"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          alignContent: "center",
          padding: "10px 20px",
          minHeight: "70px",
        }}
      >
        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <LoginOutlined style={{ marginRight: "5px" }} />
          <Link to={"/login"}>LOGIN</Link>
        </div>

        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <LoginOutlined style={{ marginRight: "5px" }} />
          <Link to={"/register"}>REGISTER</Link>
        </div>
      </header>

      <Row justify="center" style={{ marginTop: "100px" }}>
        <Col>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Registration;

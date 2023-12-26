import {
  PlusOutlined,
  GoogleOutlined,
  FacebookFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const Modal = ({ onCancel }) => {
  const onFinish = (values) => {
    console.log(values);
  };

  
  return (
    <div className="modal__out" onClick={() => onCancel()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__button" onClick={() => onCancel()}>
          <PlusOutlined />
        </button>
        <div className="modal__login">
          <div className="modal__login__links">
            <Link to={"/"}>
              <button className="modal__login__links__log">Login</button>
            </Link>
            <p>|</p>
            <Link to={"/"}>
              <button className="modal__login__links__reg">Register</button>
            </Link>
          </div>
          <p className="modal__login__text">
            Enter your username and password to login.
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="modal__login__or">
            <p>Or login with</p>
          </div>
          <div className="modal__login__socials__btn">
            <button className="social__btn google">
              <GoogleOutlined />
              <p className="social__btn__text">Login with Google</p>
            </button>
            <button className="social__btn facebook">
              <FacebookFilled />
              <p className="social__btn__text">Login with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

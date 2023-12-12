import {
  PlusOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { message } from "antd";

const Modal = ({ onCancel, setLogin }) => {
  // const [login, setLogin] = useState("modal__login")

  // const handleReg = () => {
  //   return login.setLogin("modal__reg")
  // }

  // const onFinish = (values) => {
  //   console.log(values)
  // }

  const handlyFinish = () => {
    if (!(name.length > 0)) {
      message.success("Success");
      onCancel();
      setLogin("LogOut");
    } else {
      message.error("error");
    }
  };

  return (
    <div className="modal__out" onClick={() => onCancel()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__button" onClick={() => onCancel()}>
          <PlusOutlined />
        </button>
        <div className="modal__login">
          <div className="modal__login__links">
            <button className="modal__login__links__log">Login</button>
            <p>|</p>
            <button className="modal__login__links__reg">Register</button>
          </div>
          <p className="modal__login__text">
            Enter your username and password to login.
          </p>
          <div className="modal__login__inputs">
            <input
              name="username"
              className="input"
              type="email"
              placeholder="enter your email"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              required
            />
          </div>
          <p className="modal__login__fg">Forgot Password?</p>
          <button
            type="submit"
            className="modal__login__btn"
            onClick={handlyFinish}
          >
            Login
          </button>
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
        {/* modal register start */}
        <div className="modal__reg">
          <div className="modal__reg__links">
            <button className="modal__reg__links__log">Login</button>
            <p>|</p>
            <button className="modal__reg__links__reg">Register</button>
          </div>
          <p className="modal__reg__text">
            Enter your email and password to register.
          </p>
          <div className="modal__reg__inputs">
            <input type="text" placeholder="Username" required />
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="modal__reg__btn">
            Register
          </button>
          <div className="modal__reg__or">
            <p>Or register with</p>
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

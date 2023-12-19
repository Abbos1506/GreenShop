import { Link } from "react-router-dom";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons"

const ModalReg = () => {

  return (
    <div className="modal__reg">
      <div className="modal__reg__links">
        <Link to={"/login"}><button className="modal__reg__links__log">Login</button></Link>
        <p>|</p>
        <Link to={"/register"}><button className="modal__reg__links__reg">Register</button></Link>
      </div>
      <p className="modal__reg__text">
        Enter your email and password to register.
      </p>
      <div className="modal__reg__inputs">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Enter your email address" required />
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
  );
};

export default ModalReg;

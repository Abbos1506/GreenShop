import {
  PlusOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";

const Modal = ({ onCancel }) => {

  return (
    <div className="modal__out" onClick={() => onCancel()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__button" onClick={() => onCancel()}>
          <PlusOutlined />
        </button>
        <div className="modal__login">
          <h2 className="modal__login__title">Login | Register</h2>
          <p className="modal__login__text">
            Enter your username and password to login.
          </p>
          <div className="modal__login__inputs">
            <input type="email" placeholder="enter your email" required />
            <input type="password" placeholder="enter your password" required />
          </div>
          <p className="modal__login__fg">Forgot Password?</p>
          <button type="submit" className="modal__login__btn">
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
      </div>
    </div>
  );
};

export default Modal;

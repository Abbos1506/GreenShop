import NavLogo from "../assets/image/navLogo.png";
import rootIcons from "../utils/rootIcons";
import rootMenu from "../utils/rootMenu";
import BtnIcon from "../assets/icons/BtnIcon1.png";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="root container">
      <div className="root__nav">
        <div className="root__nav__logo">
          <img src={NavLogo} alt="nav logo" />
        </div>
        <div className="nav__item">
          {rootMenu.map((item) => (
            <ul className="nav__list" key={item.id}>
              <Link to={item.path} className="nav__link">
                {item.title}
              </Link>
            </ul>
          ))}
        </div>
        <div className="nav__icons">
          {rootIcons.map((item) => (
            <Link to={item.path} className="navbar__icons" key={item.id}>
              <img src={item.image} alt="nav icons" />
            </Link>
          ))}
          <button className="root__nav__btn">
            <img src={BtnIcon} alt="button icon" />
            <p>Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root;

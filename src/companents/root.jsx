import NavLogo from "../assets/image/navLogo.png";
import rootIcons from "../utils/rootIcons";
import rootMenu from "../utils/rootMenu";
import BtnIcon from "../assets/icons/BtnIcon1.png";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Modal from "./modal";
import { createPortal } from "react-dom";
import RouterData from "../router/routes";

const Root = () => {
  const [login, setLogin] = useState("Login");
  const [open, setOpen] = useState(false);

  return (
    <div className="root container">
      <div className="root__nav">
        <Link to={"/"} className="root__nav__logo">
          <img src={NavLogo} alt="nav logo" />
        </Link>
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
          <button onClick={() => setOpen(true)} className="root__nav__btn">
            <img src={BtnIcon} alt="button icon" />
            <p>{login}</p>
          </button>
        </div>
      </div>
      {open &&
        createPortal(
          <Modal onCancel={() => setOpen(false)} setLogin={setLogin} />,
          document.body
        )}
      <div className="router">
        {RouterData.map((item) => (
          <Routes key={item.id}>
            <Route path={item.path} element={item.companent} />
          </Routes>
        ))}
      </div>
    </div>
  );
};

export default Root;

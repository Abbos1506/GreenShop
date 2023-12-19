import NavLogo from "../assets/image/navLogo.png";
import rootIcons from "../utils/rootIcons";
import rootMenu from "../utils/rootMenu";
import BtnIcon from "../assets/icons/BtnIcon1.png";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Modal from "./modal";
import { createPortal } from "react-dom";
import IconImg1 from "../assets/icons/navIcon1.png";
import SearchModal from "./searchModal";
import HomePage from "../pages/home/index.jsx";
import ShopPage from "../pages/shop/index.jsx";
import BlogsPage from "../pages/blogs";
import PlantsPage from "../pages/plants/index.jsx";
import BasketPage from "../pages/basket/index.jsx";
import CheckoutPage from "../pages/checkout/index.jsx";
import ModalReg from "./modalReg.jsx";

const Root = () => {
  const [login, setLogin] = useState("Login");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [basket, setBasket] = useState(0);

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
          <button className="search__button" onClick={() => setSearch(true)}>
            <img src={IconImg1} alt="search icon" className="search__icon" />
          </button>
          {rootIcons.map((item) => (
            <Link to={item.path} className="navbar__icons" key={item.id}>
              <img src={item.image} alt="nav icons" />
              <p className="navbar__icons__count">{basket}</p>
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

      {search &&
        createPortal(
          <SearchModal
            onClose={() => setSearch(false)}
            setSearch={setSearch}
          />,
          document.body
        )}
      <div className="router">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/plant" element={<PlantsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/savat" element={<BasketPage />} />
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Root;

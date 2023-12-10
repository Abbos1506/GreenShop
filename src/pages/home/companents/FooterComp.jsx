import footerCard from "../../../utils/footerCard";
import FooterLogo from "../../../assets/image/navLogo.png";
import FooterLoc1 from "../../../assets/icons/FooterLoc1.png";
import FooterEmail from "../../../assets/icons/FooterEmail.png";
import FooterCall from "../../../assets/icons/FooterCall.png";
import {
  footerAcc,
  footerCate,
  footerHelp,
  footerSocials,
} from "../../../utils/footerInfo";

const FooterComp = () => {
  return (
    <div className="footer__comp">
      <div className="footer__comp__news">
        <div className="news__cards">
          {footerCard.map((item) => (
            <div className="news__card" key={item.id}>
              <div className="news__card__image" key={item.id}>
                <img src={item.image} alt={item.title} />
              </div>
              <h2 className="news__card__title">{item.title}</h2>
              <p className="news__card__text">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="footer__newsletters">
          <h2 className="newsletters__title">
            Would you like to join newsletters?
          </h2>
          <div className="newsletters__input">
            <input type="email" placeholder="enter your email address..." />
            <button className="input__btn">Join</button>
          </div>
          <p className="newsletters__text">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__logo">
          <img src={FooterLogo} alt="footer logo" />
        </div>
        <div className="footer__contacts">
          <div className="footer__contacts__location">
            <img src={FooterLoc1} alt="footer location icon" />
            <p>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className="footer__contacts__email">
            <img src={FooterEmail} alt="footer email icon" />
            <p>abbosomonboyev1506@gmail.com</p>
          </div>
          <div className="footer__contacts__call">
            <img src={FooterCall} alt="footer call icon" />
            <p>+998 33 317 17 18</p>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__acc">
          <h2 className="footer__acc__title">My Account</h2>
          {footerAcc.map((item) => (
            <p className="footer__acc__list" key={item.id}>{item.title}</p>
          ))}
        </div>
        <div className="footer__help">
          <h2 className="footer__help__title">Help & Guide</h2>
          {footerHelp.map((item) => (
            <p className="footer__help__list" key={item.id}>{item.title}</p>
          ))}
        </div>
        <div className="footer__cate">
          <h2 className="footer__cate__title">Categories</h2>
          {footerCate.map((item) => (
            <p className="footer__cate__list" key={item.id}>{item.title}</p>
          ))}
        </div>
        <div className="footer__socials">
          <h2 className="footer__socials__title">Social Media</h2>
          <div className="footer__socials__icons">
            {footerSocials.map((item) => (
              <i className="footer__socials__icon" key={item.id}>{item.image}</i>
            ))}
          </div>
        </div>
      </div>
      <p className="footer__end">© 2023 GreenShop. Abbos Omonboyev.</p>
    </div>
  );
};

export default FooterComp;

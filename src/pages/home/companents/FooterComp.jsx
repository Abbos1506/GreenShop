import footerCard from "../../../utils/footerCard";

const FooterComp = () => {
  return (
    <div className="footer__comp">
      <div className="footer__comp__news">
        <div className="news__cards">
          {footerCard.map((item) => (
            <div className="news__card">
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
            <input
              type="email"
              placeholder="enter your email address..."
            />
            <button className="input__btn">Join</button>
          </div>
          <p className="newsletters__text">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;

import cardData from "../../../utils/cardData";
import { Link } from "react-router-dom"

const HomeCardComp = () => {
  return (
    <div className="homeCardComp">
      <div className="homeComp__cards">
        {cardData.map((item) => (
          <Link to={item.title} className="homeComp__card" key={item.id}>
            <div className="homeComp__card__image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="homeComp__card__info">
                <h2 className="homeComp__card__info__title">{item.title}</h2>
                <p className="homeComp__card__info__text">{item.text}</p>
                <button className="homeComp__card__info__btn">Find More</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCardComp;

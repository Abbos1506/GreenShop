import { Link } from "react-router-dom";
import rightData from "../../../utils/rightData";
import { useState } from "react";

const ShopHeader = () => {

    const [id, setId] = useState()

  return (
    <div className="shop__header">
      <div className="shop__header__links">
        <Link to={"/"}>Home</Link>
        <p>/</p>
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div className="shop__header__cards">
        {
            rightData.map(item => (
                <div className="shop__header__card" key={item.id}>
                    <div className="shop__header__card__img" onClick={() => setId(item.image)}>
                        <img src={item.image} alt="item image" />
                    </div>
                    <div className="shop__header__card__bg">
                        <img src={id} alt="" key={id}/>
                    </div>
                    <div className="shop__header__card__info">

                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ShopHeader;

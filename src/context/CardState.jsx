import React, { useReducer } from "react";
import CartContext from "./cardContext";
import CardReducer from "./CardReducer";
import { ADD_TO_CART, REMOVE_ITEM } from "./Types";

const CardState = ({ children }) => {
  const initalState = {
    showCard: false,
    cardItems: [],
  };

  const [state, dispatch] = useReducer(CardReducer, initalState);

  const addToCard = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCard: state.showCard,
        cardItems: state.cardItems,
        addToCard,
        showHideCard,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardState;

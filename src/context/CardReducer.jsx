import { ADD_TO_CART, REMOVE_ITEM } from "./Types";

const CardReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cardItems: [...state.cardItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cardItems: state.cardItems.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default CardReducer;

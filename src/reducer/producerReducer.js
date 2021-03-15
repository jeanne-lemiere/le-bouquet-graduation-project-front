import {

  SET_PRODUCERS,
  SET_ONE_SELLER,
} from 'src/actions/sellerActions';

export const initialState = {
  producers: [],
  oneSellerProducts: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // cette donnée est donnée par l'action
    case SET_PRODUCERS:
      return {
        ...state,
        // ici on reecrit le state avec les element du payload contenus dans action.payload
        producers: action.payload,
      };
    case SET_ONE_SELLER:
      return {
        ...state,
        oneSellerProducts: action.products,
      };
    default:
      return state;
  }
};

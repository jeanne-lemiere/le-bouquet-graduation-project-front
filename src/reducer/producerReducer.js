import {

  SET_PRODUCERS,
} from 'src/actions/sellerActions';

export const initialState = {
  producers: [],
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
    default:
      return state;
  }
};

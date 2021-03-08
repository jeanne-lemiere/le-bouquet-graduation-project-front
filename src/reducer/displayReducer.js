import {
  TOGGLE_AUTH_MODAL,
} from 'src/actions/displayActions';

const initialState = {
  authModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        authModal: !state.authModal,
      };
    default:
      return state;
  }
};

export default reducer;

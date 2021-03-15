export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';
export const CHANGE_NAV_BACKGROUND = 'CHANGE_NAV_BACKGROUND';
export const SET_LOADING = 'SET_LOADING';

export const toggleAuthModal = () => ({
  type: TOGGLE_AUTH_MODAL,
});

export const changeNavBackground = (payload) => ({
  type: CHANGE_NAV_BACKGROUND,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

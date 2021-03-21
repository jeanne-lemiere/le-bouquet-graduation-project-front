export const FETCH_PRODUCERS = 'FETCH_PRODUCERS';
export const SET_PRODUCERS = 'SET_PRODUCERS';
export const FETCH_ONE_SELLER = 'FETCH_ONE_SELLER';
export const SET_ONE_SELLER = 'SET_ONE_SELLER';

// export const FETCH_PRODUCERS_ERROR = "FETCH_PRODUCERS_ERROR";

// LORSQUE l'ON A BESOIN DE FAIRE UNE REQUETE ON PASSE PAR LE MIDDLEWARE
// LORSQUE L'ON A BESOIN DE MODIFIER LE STATE ON PASSE PAR LE REDUCER

// Cette fonction est appelée dans le container
export const fetchProducers = () => ({
  // cette donnée est recupérée par le middleware
  type: FETCH_PRODUCERS,
});

export const setProducers = (payload) => ({
  // cette donnée est recupérée par le reducer
  type: SET_PRODUCERS,
  payload,
});
// export const fetProducersError = () => ({
//   type: FETCH_PRODUCERS_ERROR
// });



export const fetchOneSeller = (id) => ({
  // cette donnée est recupérée par le reducer
  type: FETCH_ONE_SELLER,
  id,
});


export const setOneSeller = (products) => ({
  // cette donnée est recupérée par le reducer
  type: SET_ONE_SELLER,
  products,
});


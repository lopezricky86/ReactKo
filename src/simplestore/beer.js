//Action Types
const BEER_ADDED = "beerAdded";
const BEER_REMOVED = "beerRemoved";
const BEER_UPDATED = "beerUpdatated";

//Action
export const beerAdded = (beer) => {
  return {
    type: BEER_ADDED,
    payload: beer,
  };
};

export const beerRemoved = (id) => {
  return {
    type: BEER_REMOVED,
    payload: id,
  };
};

export const beerUpdatated = (beer) => {
  return {
    type: BEER_UPDATED,
    payload: beer,
  };
};

//Reducer
export default function beerReducer(state = [], action) {
  switch (action.type) {
    case BEER_ADDED:
      return [...state, action.payload];
    case BEER_UPDATED:
      return state.map((beer) =>
        beer.id === action.payload.id ? action.payload : beer
      );
    case BEER_REMOVED:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
}

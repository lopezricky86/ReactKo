//Action Types
const BUG_ADDED = "bugAdded";
const BUG_RESOLVED = "bugResolved";

//Actions
export const bugAdded = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: BUG_RESOLVED,
    payload: {
      status: true,
      id: id,
    },
  };
};

//Reducer
let lastid = 0;
export default function bugsReducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastid,
          description: action.payload.description,
          status: false,
        },
      ];
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id
          ? bug
          : { ...bug, status: action.payload.status }
      );
    default:
      return state;
  }
}

export const unResolvedBugsSelector = (state) => {
  for (let index = 0; index <= 1000000000; index++) {}
  return state.filter((x) => x.status === false);
};

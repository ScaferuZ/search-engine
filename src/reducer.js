// how the data layer looks like
export const initialState = {
  term: null,
};

// saat menekan enter, dispatch dan ganti search term menjadi apa yang sudah diketik
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;

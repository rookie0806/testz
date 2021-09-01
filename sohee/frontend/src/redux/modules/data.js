const SET_DATA = "SET_DATA";
const SET_TEXT = "SET_TEXT";
function setDATA(data) {
  return {
    type: SET_DATA,
    data
  };
}
function setTEXT(text) {
  return {
    type: SET_TEXT,
    text
  };
}
// API Actions
function getDATA() {
  return (dispatch, getState) => {
    fetch("/crawl/getData/", {
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        
        dispatch(setDATA(json));
      })
      .catch(err => console.log(err));
  };
}
function getTEXT() {
  return (dispatch, getState) => {
    fetch("/crawl/getToWrite/", {
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        
        dispatch(setTEXT(json));
      })
      .catch(err => console.log(err));
  };
}
// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return applySetDATA(state, action);
    case SET_TEXT:
        return applySetTEXT(state, action);
    default:
      return state;
  }
}
// Reducer Functions

function applySetDATA(state, action) {
  const { data } = action;
  return {
    ...state,
    data
  };
}
function applySetTEXT(state, action) {
  const { text } = action;
  return {
    ...state,
    text
  };
}
const actionCreators = {
  getDATA,
  getTEXT
};

export { actionCreators };

// Export reducer by default

export default reducer;
const SET_DATA = "SET_DATA";
const SET_TEXT = "SET_TEXT";
const SET_XY = "SET_XY";
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
function setXY(xy) {
  return {
    type: SET_XY,
    xy
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
function getCookie(cookieName){
  var cookieValue=null;
  if(document.cookie){
      var array=document.cookie.split((escape(cookieName)+'='));
      if(array.length >= 2){
          var arraySub=array[1].split(';');
          cookieValue=unescape(arraySub[0]);
      }
  }
  return cookieValue;
}
function getXY(){
  return (dispatch, getState) => {
    fetch("/crawl/getXY/", {
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        
        dispatch(setXY(json));
      })
      .catch(err => console.log(err));
  };
}
function postXY(data) {
  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);
  console.log(JSON.stringify({
    data
  }) );
  return (dispatch, getState) => {

    fetch(`/crawl/setsoheeXY/`, {
      method: "POST",
      headers: {
        'X-CSRFTOKEN': csrftoken,
        'Content-Type': 'application/json; charset=UTF-8',
        
      },
      body: JSON.stringify(
        data
      )
      
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.message) {
          console.log(json.message)
        }
      });
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
    case SET_XY:
      return applySetXY(state, action)
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
function applySetXY(state, action) {
  const { xy } = action;
  return {
    ...state,
    xy
  };
}
const actionCreators = {
  getDATA,
  getXY,
  getTEXT,
  postXY,
};

export { actionCreators };

// Export reducer by default

export default reducer;
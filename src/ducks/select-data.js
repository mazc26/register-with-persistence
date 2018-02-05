export const GET_SELECT_DATA = "GET_SELECT_DATA";
export const SET_USER = "SET_USER";
export const SET_NEW_MESSAGE = "SET_NEW_MESSAGE";

import axios from 'axios';

export const getSelectData = () => (dispatch) => {
  
  const url = 'https://restcountries.eu/rest/v2/all';
  axios.get(url)
  .then(data=>{
    return (dispatch(getData(data)));
  })
  .catch(error=>{
    console.log(error)
  })
  
}

// initial state
const initialState = {
  countries: "",
  users: [],
  message: ""
}

export const setUser = (name,surname,country,bDay) =>{

  return{
    type: "SET_USER",
    payload: {name,surname,country,bDay}
  }

}

export const resendMessage = (message) =>{
  
    return{
      type: "SET_NEW_MESSAGE",
      payload: message
    }
  
  }


export const getData = (data) =>{
 
  return{
    type: "GET_SELECT_DATA",
    payload: data
  }
}

//reducer get countries
let arrayUsers;
export const GetCountries =  (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECT_DATA:
    return {
        ...state,
        countries: action.payload
      };
    case SET_USER:
    arrayUsers = state.users || [];
      return {
        ...state, 
        users:[...arrayUsers, action.payload ],
      };
      case SET_NEW_MESSAGE:
        return {
          ...state, 
          message: action.payload,
        };
      default:
      return state;
  }
}; 




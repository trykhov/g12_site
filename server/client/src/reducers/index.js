import { combineReducers } from 'redux';

const initialLanguage = {currLang: "english"};

const language = (state = initialLanguage, action) => { //always initialize a state
  switch(action.type) {
    case "TRANSLATE_ENGLISH":
      return action.payload;
    case "TRANSLATE_SPANISH":
      return action.payload;
    default:
      return state.currLang;
  }
};

// reducers must have at least two arguments (action cannot be the only argument)
export default combineReducers({
  translate: language
});

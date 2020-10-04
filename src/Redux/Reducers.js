const { combineReducers } = require("redux")

var randomAdviceRed = (iniState = "", action) => {
  switch (action.type) {
    case "RNDMO":
      return action.payload

    default:
      return iniState
  }
}

var searchAdviceRed = (iniState = [], action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload

    default:
      return iniState
  }
}

var inputValue = (iniState = "", action) => {
  switch (action.type) {
    case "VALUE":
      return action.payload

    default:
      return iniState
  }
}

var allReducers = combineReducers({
  randomAdviceRed,
  searchAdviceRed,
  inputValue,
})

export default allReducers

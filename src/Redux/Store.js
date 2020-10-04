const { createStore, applyMiddleware } = require("redux")
import thunk from "redux-thunk"
import allReducers from "./Reducers"

var myStore = createStore(allReducers, applyMiddleware(thunk))
export default myStore

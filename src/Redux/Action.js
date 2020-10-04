const { default: Axios } = require("axios")

export var randomAdvice = () => {
  return async (dispatch) => {
    var apiData = await Axios({
      url: "https://api.adviceslip.com/advice",
    })

    dispatch({
      type: "RNDMO",
      payload: apiData.data.slip.advice,
    })
  }
}

export var searchAdvice = (query) => {
  return async (dispatch) => {
    try {
      var apiData = await Axios({
        url: `https://api.adviceslip.com/advice/search/${query}`,
      })
      console.log(apiData.data.slips)
      dispatch({
        type: "SEARCH",
        payload: apiData.data.slips,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export var textChangeAction = (text) => {
  return (dispatch) => {
    dispatch({ type: "VALUE", payload: text })
  }
}


const CREATE_ELEMENT = 'createForm/CREATE_ELEMENT'

let initialState = {
  newElement: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
      }
    default:
      return state
  }
}




export default authReducer

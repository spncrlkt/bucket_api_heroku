const aTypes = {
  'AUTH_LOGIN': 'auth_login',
}

const initialState = {
  'token': null,
}

function reducer(state, action) {
  switch (action.type) {
    case aTypes.AUTH_LOGIN:
      return {...state, ...{'token': action.data }};
    default:
      throw new Error()
  }
}

export {
  reducer,
  aTypes,
  initialState,
}

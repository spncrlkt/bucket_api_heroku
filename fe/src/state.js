/**
 * ACTIONS AND ACTION TYPES
 */

const ats = {
  'AUTH_LOGIN': 'AUTH_LOGIN',
  'AUTH_LOGOFF': 'AUTH_LOGOFF',
  'PHR_LOAD': 'PHR_LOAD',
  'PHR_SELECT': 'PHR_SELECT',
}

function getActions(dispatch) {
  return {
    'auth_login': (token, email) => {
      dispatch({type: ats.AUTH_LOGIN, 'data': {token, email}})
      sessionStorage.setItem('tkn', token)
      sessionStorage.setItem('email', email)
    },
    'auth_logoff': () => {
      dispatch({type: ats.AUTH_LOGOFF})
      sessionStorage.setItem('tkn', null)
      sessionStorage.setItem('email', null)
    },
    'phr_load': (data) => dispatch({type: ats.PHR_LOAD, data}),
    'phr_select': (data) => dispatch({type: ats.PHR_SELECT, data}),
  }
}


/**
 * PHRAGS REDUCER
 */

const _phr_is = {
  'items': [],
  'selected': null,
}

function _phr_rx(state, action) {
  switch (action.type) {
    case ats.PHR_LOAD:
      return _dc(state, {'items': action.data });
    case ats.AUTH_LOGOFF:
      return _dc(state, {'items': []});
    case ats.PHR_SELECT:
      return _dc(state, {'selected': action.data });
    default:
      return state
  }
}


/**
 * AUTH REDUCER
 */

const initTkn = sessionStorage.getItem('tkn') !== "null" ? sessionStorage.getItem('tkn') : null
const initEmail = sessionStorage.getItem('email') !== "null" ? sessionStorage.getItem('email') : null
const _auth_is = {
  'token': initTkn,
  'email': initEmail,
}

function _auth_rx(state, action) {
  switch (action.type) {
    case ats.AUTH_LOGIN:
      return _dc(state, {'token': action.data.token, 'email': action.data.email})
    case ats.AUTH_LOGOFF:
      return _dc(state, {'token': null, 'email': null});
    default:
      return state
  }
}


/**
 * MAIN REDUCER
 */

const initialState = {
  'auth': _auth_is,
  'phrags': _phr_is,
}

function reducer(state, action) {
  let _state = Object.assign({}, {
    'auth': _auth_rx(state.auth, action),
    'phrags': _phr_rx(state.phrags, action),
  })
  return _state
}


/**
 * REDUCER HELPERS
 */

function _dc(state, update) {
  return Object.assign({}, state, update);
}



/**
 * SELECTOR FUNCTIONS
 */
const selectToken = (state) => () => state.auth.token;
const selectEmail = (state) => () => state.auth.email;
const selectAllPhrags = (state) => () => state.phrags.items
const selectSelectedPhragId = (state) => () => state.phrags.selected
const selectSelectedPhrag = (state) => () => {
  const selId = selectSelectedPhragId(state)()
  const allPhrags = selectAllPhrags(state)()
  if (!selId) {
    return null;
  }
  return allPhrags.find((p) => p.id === selId)
}

const getSelectors = (state) => ({
  'token': selectToken(state),
  'allPhrags': selectAllPhrags(state),
  'selPhrag': selectSelectedPhrag(state),
  'curEmail': selectEmail(state),
})



/**
 * EXPORT IT
 */
export {
  reducer,
  initialState,
  getSelectors,
  getActions,
}

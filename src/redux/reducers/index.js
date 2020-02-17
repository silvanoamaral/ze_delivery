import { combineReducers } from 'redux'

import { qntItensCartReducer } from './qntItensCartReducer'

const rootReducer = combineReducers({
  qntItensCartReducer,
})

export default rootReducer
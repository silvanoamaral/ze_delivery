import {
  QNT_ITENS_CART,
} from '../actions/actionTypes'

const initialState = {
  qntItensCart: 0,
}

export const qntItensCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case QNT_ITENS_CART:
      return {
        ...state,
        qntItensCart: state.qntItensCart + 1
      }
    default:
      return state
  }
}
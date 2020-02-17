import {
  QNT_ITENS_CART,
} from '../actions/actionTypes'

export const fetchRegisterSuccess = qntItensCart => ({
  type: QNT_ITENS_CART,
  qntItensCart,
})
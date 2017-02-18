import {
  GET_DESCR_REQUEST,
  GET_DESCR_SUCCESS,
  GET_RECOM_REQUEST,
  GET_RECOM_SUCCESS
} from '../constants/Descr'

const initialState = {
  id: 0,
  descr: {},
  recom: [],
  fetching: false
}

export default function main(state = initialState, action) {

  switch (action.type) {
    case GET_DESCR_REQUEST:
      return { ...state, id: action.payload, fetching: true }

    case GET_DESCR_SUCCESS:
      return { ...state, descr: action.payload, fetching: false }

    case GET_RECOM_REQUEST:
      return { ...state, id: action.payload, fetching: true }

    case GET_RECOM_SUCCESS:
      return { ...state, recom: action.payload, fetching: false }

    default:
      return state;
  }

}
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_GENRES_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS
} from '../constants/Main'

const initialState = {
  page: 1,
  movies: [],
  genres: [],
  text: '',
  searched: [],
  fetching: false
}

export default function main(state = initialState, action) {

  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { ...state, page: action.payload, fetching: true }

    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, fetching: false }

    case GET_GENRES_SUCCESS:
      return { ...state, genres: action.payload, fetching: false }

    case GET_SEARCH_REQUEST:
      return { ...state, text: action.payload, fetching: true }

    case GET_SEARCH_SUCCESS:
      return { ...state, searched: action.payload, fetching: false }

    default:
      return state;
  }

}

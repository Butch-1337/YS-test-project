import load from '../utils/load'
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_GENRES_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  API_KEY
} from '../constants/Main'

export function getMovies(page) {

  return (dispatch) => {
  dispatch({
      type: GET_MOVIES_REQUEST,
      payload: page
    })
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  let results = [];
  
  load(url).then(data => {
    results = Object.assign([],data.results)
  }).then( () =>
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: results
      })
  ) 
  }
}

export function getGenres() {

  return (dispatch) => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  let genres = [];
  
  load(url).then(data => {
    genres = Object.assign([],data.genres)
  }).then( () =>
      dispatch({
        type: GET_GENRES_SUCCESS,
        payload: genres
      })
  ) 
  }
}

export function search(text) {

  return (dispatch) => {
  dispatch({
    type: GET_SEARCH_REQUEST,
    payload: text
  })

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`
  let searched = [];
  
  load(url).then(data => {
    searched = Object.assign([],data.results)
  }).then( () =>
      dispatch({
        type: GET_SEARCH_SUCCESS,
        payload: searched
      })
  ) 
  }
}
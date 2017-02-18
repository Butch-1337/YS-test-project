import load from '../utils/load'
import {
  GET_DESCR_REQUEST,
  GET_DESCR_SUCCESS,
  GET_RECOM_REQUEST,
  GET_RECOM_SUCCESS
} from '../constants/Descr'
import { API_KEY } from '../constants/Main'


export function getDescr(id) {

  return (dispatch) => {
  dispatch({
      type: GET_DESCR_REQUEST,
      payload: id
    })
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  let results = {};
  
  load(url).then(data => {
    results = Object.assign({},data)
  }).then( () =>
      dispatch({
        type: GET_DESCR_SUCCESS,
        payload: results
      })
  ) 
  }
}

export function getRecom(id) {

  return (dispatch) => {
  dispatch({
      type: GET_RECOM_REQUEST,
      payload: id
    })
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
  let results = [];
  
  load(url).then(data => {
    results = Object.assign([],data.results)
  }).then( () =>
      dispatch({
        type: GET_RECOM_SUCCESS,
        payload: results
      })
  ) 
  }
}

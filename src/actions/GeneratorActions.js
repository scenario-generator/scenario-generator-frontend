import { REQUEST_GENERATORS, RECEIVE_GENERATORS } from '../constants/ActionTypes';
import GeneratorsIndexPath from '../constants/api/generators/IndexPath.js';
import axios from 'axios';

export function receiveGenerators(json) {
  return {
    type: RECEIVE_GENERATORS,
    generators: json.generators,
  };
}

export function requestGenerators() {
  return {
    type: REQUEST_GENERATORS,
  };
}

export function fetchGenerators() {
  return function (dispatch) {
    dispatch(requestGenerators())
    return axios.get(GeneratorsIndexPath)
      .then(json => dispatch(receiveGenerators(json.data)))
  }
}

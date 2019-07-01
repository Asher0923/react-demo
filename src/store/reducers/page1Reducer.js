import { PAGE_ONE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
  case PAGE_ONE:
    return {
      ...state,
      status: action.payload
    };
  default:
    return state;
  }
}

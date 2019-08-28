import { INC, DEC, INC_VAL, DEC_VAL, TOGGLE_DIRECTION } from '../actions/types'

export default (state = { count: 0, increment: true }, action) => {
  switch (action.type) {
    case INC: {
      state = { ...state, count: state.count + 1 };
      break;
    }
    case DEC: {
      state = { ...state, count: state.count - 1 };
      break;
    }
    case INC_VAL: {
      state = { ...state, count: state.count + action.payload }
      break;
    }
    case DEC_VAL: {
      state = { ...state, count: state.count - action.payload }
      break;
    }
    case TOGGLE_DIRECTION: {
      state = { ...state, increment: !state.increment }
      break;
    }
  }
  return state;
}
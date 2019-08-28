import { INC, DEC, INC_VAL, DEC_VAL, TOGGLE_DIRECTION } from './types'

export const renderCounter = () => ({
  type: INC,
})

export const increment = () => ({
  type: INC,
})

export const incrementByValue = (value) => ({
  type: INC_VAL,
  payload: value,
});

export const decrement = () => ({
  type: DEC,
})

export const decrementByValue = (value) => ({
  type: DEC_VAL,
  payload: value,
})

export const toggleDirection = () => ({
  type: TOGGLE_DIRECTION,
})

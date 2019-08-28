import React from 'react';
import { incrementByValue, decrementByValue } from '../redux/actions/counter';
import { useDispatch, useSelector } from 'react-redux';

const counterSelector = state => state.counter;

const useCounter = () => {
  const dispatch = useDispatch();
  const incrementBy10 = () => {
    dispatch(incrementByValue(10));
  }
  const decrementBy10 = () => {
    dispatch(decrementByValue(10));
  }
  return { incrementBy10, decrementBy10 };
}

const Counter = ({}) => {
  const { count } = useSelector(counterSelector);
  const { incrementBy10, decrementBy10 } = useCounter();

  return (
    <div>
      <span>{ count }</span>
      <button onClick={incrementBy10}>+10</button>
      <button onClick={decrementBy10}>-10</button>
    </div>
  );

}
export default Counter;
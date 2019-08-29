import React from 'react'
import { connect } from 'react-redux';
import { renderCounter, increment, decrementByValue, decrement, incrementByValue } from '../redux/actions/counter';
import Counter from '../components/counter';

class Index extends React.Component{
  // static getInitialProps({reduxStore}) {
  //   reduxStore.dispatch(renderCounter());
  //   return {
  //   };
  // }

  componentDidMount () {
    this.counter = setInterval(() => this.props.increment(), 1000);
    this.anotherCounter = setInterval(() => this.props.decrementByValue(10), 10000);
  }

  componentWillUnmount () {
    clearInterval(this.counter);
    clearInterval(this.anotherCounter);
  }

  render() {
    return <Counter />
  }
}

const mapDispatchToProps = { increment, incrementByValue, decrementByValue, decrement };

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

export default connect(null, mapDispatchToProps)(Index);

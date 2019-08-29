import React from 'react';
import { incrementByValue, decrementByValue } from '../redux/actions/counter';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const counterSelector = state => state.counter;

const useCounter = () => {
  const dispatch = useDispatch();
  const incrementBy10 = () => {
    dispatch(incrementByValue(10));
  };
  const decrementBy10 = () => {
    dispatch(decrementByValue(10));
  };
  return { incrementBy10, decrementBy10 };
};

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Counter = ({}) => {
  const { count } = useSelector(counterSelector);
  const { incrementBy10, decrementBy10 } = useCounter();
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {count}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Auto Reset Counter
          </Typography>
          <Typography variant="body2" component="p">
            The counter increments by 1 sec every sec.
            <br/>
            The counter decrements by 10 sec after every 10 sec.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={incrementBy10}>+10</Button>
          <Button size="small" onClick={decrementBy10}>-10</Button>
        </CardActions>
      </Card>
    </Container>
  );

};
export default Counter;
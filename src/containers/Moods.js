import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelectors';
import { drinkCoffee, eatSnacks, takeNap, study } from '../actions/moodActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import ResetButton from '../components/reset/ResetButton';
import styles from './Moods.css';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACKS', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

const Moods = ({ coffees, snacks, naps, studies, handleSelection }) => {
  const count = {
    coffees,
    snacks,
    naps,
    studies
  };

  const face = getFace(count);

  return (
    <section className={styles.Moods}>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={face} />
      <ResetButton />
    </section>
  );
};

Moods.propTypes = {
  coffees: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    coffees: getCoffees(state),
    snacks: getSnacks(state),
    naps: getNaps(state),
    studies: getStudies(state)
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    if(name === 'DRINK_COFFEE') dispatch(drinkCoffee());
    if(name === 'EAT_SNACKS') dispatch(eatSnacks());
    if(name === 'TAKE_NAP') dispatch(takeNap());
    if(name === 'STUDY') dispatch(study());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

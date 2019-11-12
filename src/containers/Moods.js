import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../selectors/selectors';
import PropTypes from 'prop-types';
import actions from '../actions/actions';

const Moods = ({ coffees, snacks, naps, studies, handleSelection }) => {
  const count = {
    coffees,
    snacks,
    naps, 
    studies
  };

  const face = getFace(count);

  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  coffees: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

const MoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodContainer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from '../actions/actions';
import getFace from '../selectors/selectors';

class Moods extends Component {
  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies
});

const mapDispatchToProps = dispatch => ({
  drinkCoffee() {
    dispatch({
      type: 'DRINK_COFFEE'
    });
  },
  eatSnack() {
    dispatch({
      type: 'EAT_SNACK'
    });
  },
  takeNap() {
    dispatch({
      type: 'TAKE_NAP'
    });
  },
  study() {
    dispatch({
      type: 'STUDY'
    }); 
  }
});

const MoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodContainer;

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class Routes extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.pradip.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/pradip'
          render={() => <DogList pradip={this.props.pradip} />}
        />
        <Route exact path='/pradip/:name' render={getDog} />
        <Redirect to='/pradip' />
      </Switch>
    );
  }
}
export default Routes;

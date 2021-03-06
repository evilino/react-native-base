import React from 'react'; // eslint-disable-line no-unused-vars
import { Navigator } from 'react-native';

export default class NavigationBar extends Navigator.NavigationBar {
  render() {
    const routes = this.props.navState.routeStack;

    if (routes.length) {
      const route = routes[routes.length - 1];

      if (route.displayNavBar === false) {
        return null;
      }
    }

    return super.render();
  }
}

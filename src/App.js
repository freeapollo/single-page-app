import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink, Switch
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import HeaderBar from './components/HeaderBar.js';
import Home from './components/pages/Home';
import Button from './components/pages/Button';
import Cards from './components/pages/Cards';
import Lists from './components/pages/Lists';
import Menus from './components/pages/Menus';
import PricingBoxes from './components/pages/PricingBoxes';

class App extends Component {
  render() {
    const { containerStyle, parentContainer, dashboardStyle } = Styles;
    return (
      <BrowserRouter>
        <div style={parentContainer}>
          <HeaderBar />

          <div style={containerStyle}>
            <div className="navigationBar">
              <Navigation />
            </div>

            <div style={dashboardStyle}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Button" component={Button}/>
                <Route exact path="/Cards" component={Cards}/>
                <Route exact path="/Lists" component={Lists}/>
                <Route exact path="/Menus" component={Menus}/>
                <Route exact path="/PricingBoxes" component={PricingBoxes}/>
              </Switch>

            </div>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Styles = {
  containerStyle: {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "55px",
    "height": "100%"
  },
  parentContainer: {
    "height": "100%"
  },
  dashboardStyle: {
    "flex": 10
  }
}

export default App;

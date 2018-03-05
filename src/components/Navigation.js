import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink, Switch
} from 'react-router-dom';

class Navigation extends Component {

  state = {
    appendChildren: [],
    listedData: [{
      "name": "Dashboard",
      "path": '',
    },{
      "name": "Components",
      "path": '',
      "children": [{
        "name": "Tabs",
        "path": "Tabs"
      },{
        "name": "Cards",
        "path": "Cards"
      },{
        "name": "Menus",
        "path": "Cards"
      }]
    },{
      "name": "Tables",
      "path": '',
      "children": [{
        "name": "Static Tables",
        "path": "Cards"
      },{
        "name": "Responsive Tables",
        "path": "Cards"
      }]
    },{
      "name": "Extra Pages",
      "path": '',
      "children": [{
        "name": "Login Page",
        "path": "Cards"
      },{
        "name": "Sign Up Page",
        "path": "Cards"
      },{
        "name": "404 Page",
        "path": "Cards"
      },{
        "name": "Forgot Password",
        "path": "Cards"
      }]
    }]
  }

  render() {
    this.renderItems(this.state.listedData, '', 'parentMenu');
    return (
      <div className='menuContainer'>
          {this.state.appendChildren}
      </div>
    );
  }

  renderItems = function(data, id, classname){
    data.map((data) => {
      this.state.appendChildren.push(<div className={[id,classname,'menuList'].join(' ')}><NavLink to={data.path}>{data.name}</NavLink></div>);
      if(data.children){
        this.renderItems(data.children, data.name, 'childMenu');
      }
    });
  }

}

export default Navigation;

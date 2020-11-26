import './App.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group'
import {Navbar, NavItem, NavBurger, DropdownMenu } from './components/Navbar'

function App() {

  return (

    <Navbar>
      <NavItem icon="HF"/>
      <NavBurger>
      </NavBurger>
    </Navbar>
  );
}

export default App;

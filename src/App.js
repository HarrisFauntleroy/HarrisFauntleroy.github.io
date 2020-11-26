import './App.css';
import { ReactComponent as DiscordIcon } from './svg/discord-brands.svg'
import { ReactComponent as CaretDown } from './svg/caret-down-solid.svg'
import { ReactComponent as ArrowLeft } from './svg/arrow-left-solid.svg'
import { ReactComponent as Cog } from './svg/cog-solid.svg'
import { ReactComponent as ChevronDown } from './svg/chevron-down-solid.svg'

import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'

function App() {



  return (

    <Navbar>
      <NavItem icon={<DiscordIcon />} />
      <NavItem icon="😊" />
      <NavItem icon="😊" />
      <NavItem icon={<CaretDown />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>

    </Navbar>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Cog />}
            rightIcon={<ChevronDown />}
            goToMenu="settings">
            Settings
        </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronDown />}
            goToMenu="animals">
            Animals
        </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeft />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Cog />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Cog />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Cog />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Cog />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeft />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav >
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as UserIcon } from '../icons/user-solid.svg'
import { ReactComponent as TwitterIcon } from '../icons/twitter-brands.svg'
import { ReactComponent as SlackIcon } from '../icons/slack-brands.svg'
import { ReactComponent as LinkedInIcon } from '../icons/linkedin-brands.svg'
import { ReactComponent as LinkIcon } from '../icons/link-solid.svg'
import { ReactComponent as InstructablesIcon } from '../icons/instructables.svg'
import { ReactComponent as HamburgerIcon } from '../icons/hamburger.svg'
import { ReactComponent as GithubIcon } from '../icons/github-brands.svg'
import { ReactComponent as DiscordIcon } from '../icons/discord-brands.svg'
import { ReactComponent as GearIcon } from '../icons/cog-solid.svg'
import { ReactComponent as ArrowRightIcon } from '../icons/arrow-right-solid.svg'
import { ReactComponent as ArrowLeftIcon } from '../icons/arrow-left-solid.svg'

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav >
    );
}

export function NavItem(props) {

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

export function NavBurger() {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <NavItem
            icon={<HamburgerIcon
                onClick={() => setCollapsed(!collapsed)}
                className={`hamburger ${collapsed ? "" : "opened"}`}
            />}>
            <DropdownMenu></DropdownMenu>
        </NavItem>
    );
}

export function DropdownMenu() {

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
                {/* <span className="icon-right">{props.rightIcon}</span> */}
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
                    <DropdownItem
                        leftIcon={<UserIcon />}
                    >Resume</DropdownItem>

                    <DropdownItem
                        leftIcon={<GearIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="animals">
                        Projects
          </DropdownItem>

                    <DropdownItem
                        leftIcon={<LinkIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="settings">
                        Links
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
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Links</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<GithubIcon />}>Github</DropdownItem>
                    <DropdownItem leftIcon={<LinkedInIcon />}>LinkedIn</DropdownItem>
                    <DropdownItem leftIcon={<TwitterIcon />}>Twitter</DropdownItem>
                    <DropdownItem leftIcon={<DiscordIcon />}>Discord</DropdownItem>
                    <DropdownItem leftIcon={<SlackIcon />}>Slack</DropdownItem>
                    <DropdownItem leftIcon={<InstructablesIcon />}>Instructables</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Projects</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦸">Marvel React App</DropdownItem>
                    <DropdownItem leftIcon="🌿">No More Plants!</DropdownItem>
                    <DropdownItem leftIcon="📖">Library Admin Panel</DropdownItem>
                    <DropdownItem leftIcon="🚧">Hermes (In-dev)</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
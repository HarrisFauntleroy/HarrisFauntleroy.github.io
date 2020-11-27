import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as UserIcon } from '../icons/user-solid.svg'
import { ReactComponent as TwitterIcon } from '../icons/twitter-brands.svg'
import { ReactComponent as InstagramIcon } from '../icons/instagram-brands.svg'
import { ReactComponent as SlackIcon } from '../icons/slack-brands.svg'
import { ReactComponent as LinkedInIcon } from '../icons/linkedin-brands.svg'
import { ReactComponent as LinkIcon } from '../icons/link-solid.svg'
import { ReactComponent as InstructablesIcon } from '../icons/instructables.svg'
import { ReactComponent as HamburgerIcon } from '../icons/hamburger.svg'
import { ReactComponent as GithubIcon } from '../icons/github-brands.svg'
import { ReactComponent as DiscordIcon } from '../icons/discord-brands.svg'
import { ReactComponent as GearIcon } from '../icons/cog-solid.svg'
import { ReactComponent as PeopleIcon } from '../icons/users-solid.svg'
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
            <a href={props.location} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export function NavBurger(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a
                href="#"
                className={`icon-button ${open ? "opened" : ""}`}
                onClick={() => setOpen(!open)}>
                <HamburgerIcon />
            </a>
            {open && props.children}
        </li>
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
            <a href={props.location} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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
                        location="https://harrisfauntleroy.dev/resume/"
                    >Resume
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<GearIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="projects">
                        Projects
          </DropdownItem>

          <DropdownItem
                        leftIcon={<PeopleIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="personal">
                        Socials
          </DropdownItem>
                    
          <DropdownItem
                        leftIcon={<LinkIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="links">
                        Links
          </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'projects'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Projects</h2>
                    </DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/marvel-react-app" leftIcon="🦸">Marvel React App</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/no-more-plants" leftIcon="🌿">No More Plants!</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/library-admin-panel" leftIcon="📖">Library Admin Panel</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/hermes" leftIcon="🚧">Hermes (In-dev)</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'personal'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Socials</h2>
                    </DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy" leftIcon={<GithubIcon />}>Github</DropdownItem>
                    <DropdownItem location="https://www.linkedin.com/in/harris-fauntleroy-b4b5b51b1/" leftIcon={<LinkedInIcon />}>LinkedIn</DropdownItem>
                    <DropdownItem location="https://twitter.com/CosmicOctopus99" leftIcon={<TwitterIcon />}>Twitter</DropdownItem>
                    <DropdownItem location="https://discord.gg/N4MGJGG7RA" leftIcon={<DiscordIcon />}>Discord</DropdownItem>
                    <DropdownItem location="https://www.instagram.com/harrisfauntleroy/" leftIcon={<InstagramIcon />}>Instagram</DropdownItem>
                    <DropdownItem location="https://www.instructables.com/member/HazzWold1993/" leftIcon={<InstructablesIcon />}>Instructables</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'links'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Links</h2>
                    </DropdownItem>
                    <DropdownItem location="https://mdigi.tools/color-shades/" leftIcon={<GithubIcon />}>Color Shade tool</DropdownItem>
                    <DropdownItem location="https://unsplash.com/" leftIcon={<LinkedInIcon />}>UnSplash Photos</DropdownItem>
                    <DropdownItem location="https://tinypng.com/" leftIcon={<TwitterIcon />}>TinyPNG</DropdownItem>
                    <DropdownItem location="https://fontawesome.com/icons?d=gallery" leftIcon={<DiscordIcon />}>Font Awesome Icons</DropdownItem>
                    <DropdownItem location="https://cdnjs.com/" leftIcon={<InstagramIcon />}>CDNJS</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
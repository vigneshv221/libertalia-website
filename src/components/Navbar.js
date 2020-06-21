import React, { Component } from "react";
import logo from "./lib-01.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='nav-content'>
                    <img
                        src={logo}
                        className='nav-logo'
                        alt='Logo'
                        onClick={this.scrollToTop}
                    />
                    <span className='Libertalia'>LIBERTALIA</span>
                    <ul className='nav-items'>
                        <li className='nav-item'>
                            <Link
                                activeClass='active'
                                to='section1'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass='active'
                                to='section2'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                The Problem
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass='active'
                                to='section3'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Our Solution
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass='active'
                                to='section4'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass='active'
                                to='section5'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

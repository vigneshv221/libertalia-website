import React, { Component } from "react";
import { Link, animatedScroll as scroll } from "react-scroll";

class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className='topnav'>
                <span className='Libertalia'>LIBERTALIA</span>
                <div className='topnav-right'>
                    <a className='active' href='#home'>
                        Home
                    </a>
                    <a href='#contact'>Contact</a>
                    <a href='#search'>Search</a>
                    <a href='#about'>About</a>
                </div>
            </div>
        );
    }
}

export default Navbar;

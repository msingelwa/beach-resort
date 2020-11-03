import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="navbar">
                <div>
                    <div>
                        <Link>
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
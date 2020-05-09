import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav className="Navigation">
            <Link to="/">
                <div className="icon">
                    <span className="material-icons">
                        home
                    </span>
                    <span>Home</span>
                </div>
            </Link>
            <Link to="/about">
                <div className="icon">
                    <span className="material-icons">
                        info
                    </span>
                    <span>About</span>
                </div>
            </Link>
        </nav>
    )
}

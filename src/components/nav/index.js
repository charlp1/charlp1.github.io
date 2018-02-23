import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Nav(props) {
    return (
        <nav id="nav">
            <div id="nav-logo">
            </div>

            <ul className="flex-row">
                <li className="pad-sides">
                    <a
                        className="navLink"
                        href="/"
                    >
                        <i className="fas fa-home"></i>
                        <span className="pad-sides">
                            { props.trans('home.label') }
                        </span>
                    </a>
                </li>
                <li className="flex-row flex-right">
                    <button
                        className="btn-lang btn-lang-en"
                        onClick={() => { props.handleLanguageChange('en'); }}
                    >
                        <span>
                            { props.trans('langEn.label') }
                        </span>
                    </button>
                    <div className="divider"></div>
                    <button
                        className="btn-lang btn-lang-ja"
                        onClick={() => { props.handleLanguageChange('ja'); }}
                    >
                        <span>
                            { props.trans('langJa.label') }
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

Nav.propTypes = {
    trans: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
};

export default Nav;

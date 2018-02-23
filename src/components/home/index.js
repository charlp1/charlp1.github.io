import React from 'react';
import PropTypes from 'prop-types';
import Particles from './../particles';

import './style.css';

function Home(props) {
    return (
        <div
            id="content"
            className="flex flex-col"
            role="main"
        >
            <Particles />

            <div
                id="contentlogo"
                className="flex-col"
            >
                <object
                    id="object-snowflake"
                    type="image/svg+xml"
                    alt="snowflake"
                    data="assets/images/snowflake.svg"
                >
                </object>
            </div>

            <div
                id="contenttext"
                className="flex-col"
            >
                <div>
                    <h4 className="name">
                        {props.trans('name.label')}
                    </h4>
                    <h6 className="description">
                        {props.trans('description.label')}
                    </h6>
                    <div className="pos-rel">
                        <a
                            href="https://github.com/charlp1"
                            target="blank"
                        >
                            <i className="fab fa-github-square fa-2x"></i>
                            <span className="icon-label">
                                {props.trans('github.label')}
                            </span>
                        </a>
                        <a
                            href="https://twitter.com/yuki_cpi"
                            target="blank"
                            className="pad-sides"
                        >
                            <i className="fab fa-twitter-square fa-2x"></i>
                            <span className="icon-label">
                                {props.trans('twitter.label')}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    trans: PropTypes.func.isRequired,
};

export default Home;

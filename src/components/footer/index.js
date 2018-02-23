import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.handleShareLink = this.handleShareLink.bind(this);
    }

    handleShareLink() {
        navigator.share({
            title: 'Yuki',
            text: 'Github Page',
            url: 'https://charlp1.github.io/',
        });
    }

    render() {
        return (
            <footer
                id="footer"
                className="flex-row"
                role="contentinfo"
            >
                {
                    navigator.share && (
                        <div
                            className="link"
                            role="button"
                            tabIndex="-3"
                            onClick={this.handleShareLink}
                            onKeyDown={this.handleShareLink}
                        >
                            <i className="fas fa-share-alt"></i>
                            <span className="pad-sides">
                                {this.props.trans('share.label')}
                            </span>
                        </div>
                    )
                }

                <div className="flex-right">
                    2018
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    trans: PropTypes.func.isRequired,
};

export default Footer;

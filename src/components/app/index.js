import React from 'react';
import { I18n } from 'react-i18next';
import i18n from './../i18n';

import Nav from './../nav';
import Home from './../home';
import Footer from './../footer';

import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: 'en',
        };

        this.onLanguageChanged = this.onLanguageChanged.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('loading-screen')
                .style.cssText += 'opacity:0';
        }, 500);
    }

    onLanguageChanged(lng) {
        i18n.changeLanguage(lng);

        document.querySelector('html').setAttribute('lang', lng);

        this.setState({
            lng,
        });
    }

    render() {
        return (
            <I18n>
                {
                    t => (
                        <div className="container flex-col">
                            <Nav
                                trans={t}
                                handleLanguageChange={this.onLanguageChanged}
                            />
                            <Home
                                trans={t}
                            />
                            <Footer
                                trans={t}
                            />
                        </div>
                    )
                }
            </I18n>
        );
    }
}

export default App;

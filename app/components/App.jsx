import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>    
        )
    }
}
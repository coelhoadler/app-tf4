import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import Routes from './routes';

export default props => {
    return (
        <div className='container'>
            <Header />
            <Routes />
            <Footer />
        </div>    
    )
}
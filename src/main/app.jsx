import 'modules/bootstrap/dist/css/bootstrap.min.css'

import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react';

import Header from '../header/header';

import Routes from './routes';


export default props => {
    return (
        <div className='container'>
            <Header />
            <Routes />
        </div>    
    )
}
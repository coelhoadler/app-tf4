import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href=".">
                            <img style={ { width: '80px' } }
                                alt="Logotipo Deep Purple" 
                                src="https://firebasestorage.googleapis.com/v0/b/app-t4f.appspot.com/o/Deep%20Purple%20-%20logo.png?alt=media&token=4ea3b51a-77a0-4e60-957e-f020edcd5961" 
                            />
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
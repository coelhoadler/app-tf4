import React, { Component } from 'react';

import axios from 'axios';

export default class Content extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const URL = "https://app-t4f.firebaseio.com/.json";
        axios.get(URL).then(response => {
            console.log(response);
        }, error => {

        });
    }

    render() {
        return (
            <div>
                <h1>Aqui é meu Conteúdo</h1>
            </div>    
        )
    }
}
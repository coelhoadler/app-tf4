import React, { Component } from 'react';

import Config from '../variables';

import axios from 'axios';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentWillMount() {
        console.log("começo do componente")
        const URL = Config.production.base_api;
        axios.get(URL).then(response => {
            console.info("meus eventos antes: ", this.state.events);
            this.setState({ events : response.data.events });
            console.info("meus eventos: ", this.state.events);
        }, error => {
            console.error('request error', error);
        });
    }

    render() {
        return (
        <div>
        { this.state.events.map((item) => {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <img src={item.cover} width="100"/>
                </div>    
            );
        })}
        </div>
        );
    }
}
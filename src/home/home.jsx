import React, { Component } from 'react';
import axios from 'axios';

import Config from '../variables';
import reactUtils from '../reactUtils';

export default class Content extends Component {

    constructor(props) {
        console.log("constructor content...");
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
        const styles = {
            container: {
                display: "flex"
            },
            containerImg: {
                flexGrow: "1",
                maxWidth: "50%"
            },
            containerBand: {
                flexGrow: "1",
                maxWidth: "50%"
            }
        }

        const { container, containerImg, containerBand } = styles;

        return (
            <div>
                { this.state.events.map((item) => {
                    return (
                        <div style={container}>
                            <div style={containerImg}>
                                <img src={item.cover} style={ { maxWidth: "95%" } } />
                            </div>
                            <div>
                                <h1>{ item.name }</h1>
                                <p>Data: { reactUtils.transformDate(item.date) }</p>
                                <p>Local: { item.localEvent } / Horário: { item.hour }</p>
                                <p>Corra e garanta já o seu ingresso!</p>

                                <a href="#/payEvent">comprar</a>
                            </div>
                        </div> 
                    );
                })}
            </div>
        );
    }
}
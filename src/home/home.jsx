import React, { Component } from 'react';
import axios from 'axios';

import Config from '../variables';
import reactUtils from '../reactUtils';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeValue } from './homeActions';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentWillMount() {
        const URL = Config.production.base_api;
        axios.get(URL).then(response => {
            this.setState({ events : response.data.events });
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
            },
            rightNow: {
                color: 'rgb(197, 147, 25)',
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }
        }

        const { container, containerImg, containerBand, rightNow } = styles;

        return (
            <div>
                { this.state.events.map((item) => {
                    return (
                        <div style={container} key={item.name} className="jumbotron">
                            <div style={containerImg}>
                                <img 
                                    src={item.cover} 
                                    alt={item.name} 
                                    style={ { maxWidth: "90%" } } 
                                    className="thumbnail" />
                            </div>
                            <div>
                                <h1>{ item.name }</h1>
                                <p>Data: { reactUtils.transformDate(item.date) }</p>
                                <p>Local: { item.localEvent } / Horário: { item.hour }</p>
                                <p style={rightNow}>Corra e garanta já o seu ingresso!</p>
                                <a 
                                    className="btn btn-warning dropdown-toggle"
                                    href="#/payEvent" 
                                    onClick={ () => { this.props.changeValue(item, event) } }>Comprar</a>
                            </div>
                        </div> 
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.currentEvent.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import reactUtils from '../reactUtils';

class PayEvent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (Object.keys(this.props.value).length == 0) window.location = '.';
    }

    render() {
        const styles = {
            containerEvent: {
                display: "flex",
                flexGrow: 1,
                width: "100%",
            },
            eventHeader: {
                fontWeight: 'bold',
                padding: "1em",
                minHeight: "20px",
                marginBottom: ".8em"
            },
            bgBlue: {
                backgroundColor: "#0A4586",
                color: "#FFF"
            },
            bgYellow: {
                backgroundColor: "#fee949",
                color: "#444"
            },
            oficialSite: {
                width: '99%',
                backgroundColor: '#003B57',
                textAlign: 'center',
                padding: '.5em',
                color: '#FFF',
                fontWeight: 'bold',
                letterSpacing: '.3ch',
            },
            finishEvent: {
                marginTop: '1em'
            }
        }

        const { containerEvent,
            eventHeader,
            bgBlue,
            bgYellow,
            oficialSite,
            finishEvent
         } = styles;

        return (
            <div style={containerEvent}>
                <div className="event" style={{ flexGrow: 3 }}>
                    <div className="event--header" style={Object.assign({ marginRight: '10px' }, eventHeader, bgBlue)}>
                        <span>{this.props.value.name}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ flexGrow: 1 }}>
                            <img
                                className="thumbnail"
                                src={this.props.value.cover}
                                style={{ width: "298px" }}
                            />
                            <div style={oficialSite}>
                                <a style={{ textDecoration: 'none' }}
                                    href="http://www.deeppurple.com/"
                                    style={oficialSite}
                                    target="_blank"
                                >Site Oficial</a>
                            </div>

                        </div>
                        <div style={{ flexGrow: 1, marginRight: '10px' }}>
                            <iframe width="545" height="300" src="https://www.youtube.com/embed/F7ZF2xaNhyw?rel=0&amp;start=120" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="infoEvent" style={{ flexGrow: 1 }}>
                    <div className="event--header" style={Object.assign({}, eventHeader, bgYellow)}>
                        <span>EVENTO & INFORMAÇÕES DE PREÇO</span>
                    </div>
                    <p>
                        <span className="label label-info">
                            <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                            Data
                        </span>
                    </p>
                    <p>{reactUtils.transformDate(this.props.value.date)}</p>

                    <p>
                        <span className="label label-info">
                            <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
                            Local
                        </span>
                    </p>
                    <p>{this.props.value.localEvent}</p>

                    <p>
                        <span className="label label-info">
                            <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                            Horário
                        </span>
                    </p>
                    <p>{this.props.value.hour}</p>

                    <p>
                        <span className="label label-info">
                            <span className="glyphicon glyphicon-usd" aria-hidden="true"></span>
                            Preços
                        </span>
                    </p>
                    <select>
                        {this.props.value.prices.map(item => <option key={item.label} value={item.price}>{item.label} - R$ {item.price}</option>)}
                    </select>

                    <p style={finishEvent}>
                        <a
                            className="btn btn-success"
                            href="#">
                            Finalizar Compra
                        </a>
                    </p>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.currentEvent.value
    }
}

export default connect(mapStateToProps)(PayEvent);
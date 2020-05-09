import React, { Component } from 'react'

export default class Detail extends Component {

    componentDidMount() {
        const { location, history } = this.props;
        return !location.state && history.push('/');
    }

    render() {
        const { location } = this.props;
        return location.state ?
            <span>{location.state.title}</span> :
            null;
    }
}

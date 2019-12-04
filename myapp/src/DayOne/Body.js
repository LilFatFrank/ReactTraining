import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
            <p>{this.props.user.name}
            , {this.props.user.id}</p>
            </div>
        )
    }
}

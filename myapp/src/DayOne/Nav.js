import React, { Component } from 'react'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <p>{this.props.menus[0]}</p>
                <p>{this.props.menus[1]}</p>
                <p>{this.props.menus[2]}</p>
            </div>
        )
    }
}

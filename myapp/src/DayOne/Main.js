import React from 'react'
import Nav from './Nav'
import Body from './Body'

export default function Main() {

    let menus = ['home','about','contact us'];
    let user = {name: 'Ashik', id:1}

    return (
        <div>
            this is the main component
            <Nav menus={menus}></Nav>
            <Body user={user}></Body>
        </div>
    )
}

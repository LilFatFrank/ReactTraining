import React from 'react'

export default function Footer() {

    let object = {
        copyRight: 'Accenture Ltd.',
        year: 2019
    }

    return (
        <div>
            Footer: {object.copyRight} @{object.year}
        </div>
    )
}

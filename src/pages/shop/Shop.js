import React, { Component } from 'react'
import SHOP_DATA from './shopData'

export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                Fuckin Shop Page
            </div>
        )
    }
}

import React, { Component } from 'react'
import SHOP_DATA from './shopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherProps }) => (
                        <PreviewCollection key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

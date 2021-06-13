import React from 'react'
import './CollectionItems.css'

export const CollectionItems = ({ id, name, price, imgUrl }) => {
    return (
        <div className='collection-item'>
            <div className="image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

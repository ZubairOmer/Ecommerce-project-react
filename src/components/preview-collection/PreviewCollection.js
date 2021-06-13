import React from 'react'
import './PreviewCollection.css'

export const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

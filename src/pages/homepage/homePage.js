import React from 'react'
import './HomePage.css'
import MenuItem from '../../components/menu-item/MenuItem'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <MenuItem title='HATS' />
                <MenuItem title='JAKETS' />
                <MenuItem title='SNEAKERS' />
                <MenuItem title='WOMEN' />
                <MenuItem title='MENS' />
            </div>
        </div>
    )
}

export default HomePage
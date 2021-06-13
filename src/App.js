import React from 'react'
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import './App.css'

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={Shop} />
            </Switch>
        </div>
    );
}

export default App;

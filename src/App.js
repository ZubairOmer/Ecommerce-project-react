import React from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={Shop} />
            </Switch>
        </div>
    );
}

export default App;

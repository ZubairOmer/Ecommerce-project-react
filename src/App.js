import React from 'react'
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <div className="app">
            <HomePage />
        </div>
    );
}

export default App;

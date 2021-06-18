import React from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import SignInAndSignOut from './pages/SignIn and SignUp/SignIn-SignUp'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChange(user => {
            this.setState({ currentUser: user })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }



    render() {
        return (
            <div className="app">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/signin' component={SignInAndSignOut} />
                </Switch>
            </div>
        );
    }
}
export default App;

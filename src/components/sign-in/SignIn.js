import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>sign in with your email and password</span>
            </div>
        )
    }
}

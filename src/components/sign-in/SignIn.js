import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.target.preventDefault();
        this.setState({
            email: '', password: ''
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

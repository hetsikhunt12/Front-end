import React, { Component } from 'react'

class WelcomeMessage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='text-center text-info'>Class Component</h1>
                    <h3 className='text-center'>Welcome to React!</h3>
                </div>
            </div>
        )
    }
}

export default WelcomeMessage
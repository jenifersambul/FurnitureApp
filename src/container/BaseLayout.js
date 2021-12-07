import React, { Component } from 'react'
import Header from '../components/Header';

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

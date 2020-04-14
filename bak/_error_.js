/* eslint-disable */

// 自定义错误页面，todo

import React from 'react'
import Error from 'next/error'

export default class Error2 extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return (
            <p>
                {  this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client' }
                <Error statusCode="403" />
            </p>
        )
    }
}
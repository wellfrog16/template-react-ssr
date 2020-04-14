
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import Layout from '@com/layout/index';
import '@/assets/style/main.scss'; // 全局样式


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        // console.log(this.props);

        // @ts-ignore
        const MyLayout = Component.Layout || Layout;
        return (
            <MyLayout>
                <Head>
                    <title>页面名称</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Component {...pageProps} />
            </MyLayout>
        );
    }
}

export default MyApp;


import React from 'react';
// import App, { AppContext } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import Layout from '@com/layout/index';
import '@/assets/style/main.scss'; // 全局样式

const test = () => new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(9527);
    }, 100);
});

class MyApp extends App {
    static async getInitialProps() {
    // static async getInitialProps({ Component, ctx }: AppContext) {
        // console.log(ctx);
        // console.log(ctx.req);
        // console.log(ctx.pathname);
        // console.log(Component);
        const z = await test();
        const json = { x: 1, y: 1, z };
        return { pageProps: json };
    }

    render() {
        const { Component, pageProps } = this.props;
        // console.log(this.props);
        console.log('pageProps', pageProps);

        const cdnUrl = process.env.CDN_URL;

        // @ts-ignore
        const MyLayout = Component.Layout || Layout;
        return (
            <MyLayout content="tnt">
                <Head>
                    <title>页面名称</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="manifest" href={`${cdnUrl}/manifest.json`} />
                </Head>
                <Component {...pageProps} />
            </MyLayout>
        );
    }
}

export default MyApp;

import React from 'react';
import { NextPage } from 'next';
import PropTypes from 'prop-types';

interface Props {
    userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => {
    const kk = 'ooooooooooooooooooooooooooo';

    return (
        <main>
            Your user agent:
            {kk}
            {userAgent}
        </main>
    );
};

Page.defaultProps = {
    userAgent: '',
};

Page.propTypes = {
    userAgent: PropTypes.string,
};

Page.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Page;

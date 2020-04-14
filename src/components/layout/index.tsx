import React from 'react';
import PropTypes from 'prop-types';
// import Header, { IProps as headerProps } from './header';
import Header from './header';
import Footer from './footer';

// interface IProps {
//     headerProps: headerProps,
// }

const Com: React.FC = props => {
    const { children } = props;
    return (
        <div>
            <Header content="这里是头" />
            <main>{ children }</main>
            <Footer content="这里是脚" />
        </div>
    );
};

Com.defaultProps = {
    children: () => <div />,
};

Com.propTypes = {
    children: PropTypes.node,
};

export default Com;

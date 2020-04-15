import React from 'react';
import PropTypes from 'prop-types';
import Header, { IProps } from './header';
// import Header from './header';
import Footer from './footer';

interface IMyProps {
    headerProps: IProps;
    children?: React.ReactNode;
}

const Com: React.FC<IMyProps> = props => {
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
    // headerProps: {
    //     content: '',
    // },
};

Com.propTypes = {
    children: PropTypes.node,
    // headerProps: ,
};

export default Com;

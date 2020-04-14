import React from 'react';
import PropTypes from 'prop-types';
import { classnamesBind } from '../../utils/index';
// import style from './index.module.scss';
import styles from './test.module.scss';
// import '../../src/components/test/x.scss';

const cx = classnamesBind.bind(styles);
const className = cx({
    qq: true,
    tt: true,
});

const app: React.FC = () => {
    const a = 'asdqwe';
    return (
        <div className={className}>
            <span>{ a }</span>
            <span className="ssr">980</span>
            <img src="/logo192.png" alt="" />
        </div>
    );
};

const kkk: React.FC = props => {
    // static propTypes = {
    //     name:PropTypes.string
    // }
    const { children } = props;
    return (
        <div className="abc">{ children }</div>
    );
};

kkk.defaultProps = {
    children: () => <div />,
};

kkk.propTypes = {
    children: PropTypes.node,
};

// @ts-ignore
// app.Layout = kkk;

export default app;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { classnamesBind } from '../../utils/index';
import style from './index.module.less';
// import styles from './test.module.css';

const cx = classnamesBind.bind(style);
const className = cx({
    qq: true,
    tt: true,
});

const app: React.FC = () => {
    const a = 'asdqwe';
    return (
        <div>
            <span className={className}>{ a }</span>
            <span className="ssr">980</span>
            <img src="/logo192.png" alt="" />
            <div>
                <Button type="primary" className="or-button">Primary</Button>
                <Button className={style.test}>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
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

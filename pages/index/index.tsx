import React from 'react';
import { classnamesBind } from '../../src/utils/index';
// import style from './index.module.scss';
import styles from './test.module.scss';

const cx = classnamesBind.bind(styles);
const className = cx({
    qq: true,
    tt: true,
});

const app: React.FC = () => {
    const a = 'asdqwe';
    return (
        <div className={className}>{ a }</div>
    );
};

export default app;

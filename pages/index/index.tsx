import React from 'react';
import style from './index.module.css';

const app: React.FC = () => {
    const a = 'asdqwe';
    return (
        <div className={style.qq}>{ a }</div>
    );
};

export default app;

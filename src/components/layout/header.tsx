import React from 'react';
import style from './index.module.less';

export interface IProps {
    content?: string;
}

class Com extends React.Component {
    // @ts-ignore
    constructor() {
        // @ts-ignore
        super();
        this.state = { bar: 0 };
    }

    render() {
        // @ts-ignore
        const { bar } = this.state;
        return (
            <header className={style.header}>
                { bar }
            </header>
        );
    }
}

export default Com;

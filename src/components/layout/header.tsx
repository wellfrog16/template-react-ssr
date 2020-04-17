import React, { Component } from 'react';
import style from './index.module.less';
import store, { IStore } from './store';

class Com extends Component<any, IStore> {
    constructor(state: IStore) {
        super(state);
        this.state = store;
    }

    render() {
        const { header } = this.state;
        return (
            <header className={style.header}>
                { header.title }
            </header>
        );
    }
}

export default Com;

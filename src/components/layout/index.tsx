import React from 'react';
// import PropTypes from 'prop-types';
import Header from './header';
// import Header from './header';
import Footer from './footer';
import storeData, { IStore } from './store';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    id: number;
    store: IStore;
}

class Com extends React.Component<IProps, IState> {
    constructor(props: IProps, state: IState) {
        super(props, state);
        this.state = {
            id: 1,
            store: storeData,
        };
    }

    componentDidMount() {
        const { store } = this.state;
        store.header.title = 'aaaaaaa';
        setTimeout(() => {
            console.log('99999');
            this.setState({
                store,
            });
        }, 3000);
    }

    render() {
        const { children } = this.props;
        const { id } = this.state;
        return (
            <div>
                <Header />
                <main>
                    { children }
                    { id }
                </main>
                <Footer content="这里是脚1" />
            </div>
        );
    }
}

export default Com;

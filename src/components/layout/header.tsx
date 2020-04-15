import React from 'react';
import PropTypes from 'prop-types';
// import style from './index.module.css';

export interface IProps {
    content?: string;
}

const Com: React.FC<IProps> = ({ content }) => {
    const x = '111';
    return (
        <header>
            { x }
            { content }
        </header>
    );
};

Com.defaultProps = {
    content: '',
};

Com.propTypes = {
    content: PropTypes.string,
};

export default Com;

import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.less';
import '@/assets/style/main.less'; // 全局样式

export interface Props {
    content?: string;
}

const Com: React.FC<Props> = ({ content }) => {
    const x = '111';
    return (
        <footer className={style.footer}>
            { x }
            { content }
        </footer>
    );
};

Com.defaultProps = {
    content: '',
};

Com.propTypes = {
    content: PropTypes.string,
};

export default Com;

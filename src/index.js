import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from './img/test.png';
import './styles.scss';

const Index = () => {
    return <div>
        Welcome to React!
            <img src={LOGO} width="30" height="auto" />
        </div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));
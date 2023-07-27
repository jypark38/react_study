// 브라우저에서 동작하는 자바스크립트
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home/>, document.querySelector('#root'))
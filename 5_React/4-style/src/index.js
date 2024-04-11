import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./asset/reset.css"; // 전역적으로 사용하므로 변수명은 필요 x


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


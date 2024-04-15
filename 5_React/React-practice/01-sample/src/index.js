import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={App} />// router의 기능을 맡아주는 component 선택
);


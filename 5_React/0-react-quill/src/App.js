/*
src
├── components
|   ├── Add.js
|   ├── Edit.js
|   ├── Editpost.js
|   ├── EditorToolbar.js
|   ├── TextEditor.css
|   └── Home.js
├── App.css
├── App.js
├── index.css
└── index.js 
*/

import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
const App = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/add",
        element: <Add/>
    },
    {
        path: "/edit/:postID",
        element: <Edit/>
    },
]) 
// {
//   return (
//     <div>
//       <Router basename="/">
//         <Routes> 
//           <Route exact path="/" component={Home}/>
//           <Route path="/Add" component={Add}/>
//           <Route path="/Edit/:postID" component={Edit}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
export default App;

/*
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Create from "./pages/Create";
import Layout from "./components/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Home/>},
            {path:"create", element: <Create/>}
        ]
    },
    // {
    //     path:"/create",
    //     element: <Create/>
    // }
]);
export default router;
*/

import { createBrowserRouter } from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';
import Edit from './pages/Edit';

// 여기가 router 역할
/*
npm i react-router-dom
*/
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
    path: "/edit",
    element: <Edit/>
  }
])

export default App;

import { createBrowserRouter } from "react-router-dom";
import Add from "./pages/animalBoard/Add";
import Home from "./pages/animalBoard/Home";
import Edit from "./pages/animalBoard/Edit";
import Detail from "./pages/animalBoard/Detail";

// 여기가 router 역할
/*
npm i react-router-dom
*/
const App = createBrowserRouter([
  {
    path: "/compagno/",
    element: <Home />,
  },
  {
    path: "/compagno/write-board",
    element: <Add />,
  },
  {
    path: "/compagno/edit-board",
    element: <Edit />,
  },
  {
    path: "/compagno/:animalBoardCode",
    element: <Detail />,
  },
]);

export default App;

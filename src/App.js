import "./App.css";
import Home from "./Components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chooseus from "./Components/ChooseUs/Chooseus";
import Areaofpractice from "./Components/AreaofPractice/Areaofpractice";
import TeamInfo from "./Components/TeamInfo/TeamInfo";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/chooseus", element: <Chooseus /> },
  { path: "/Areaofpractice", element: <Areaofpractice /> },
  { path: "/TeamInfo", element: <TeamInfo /> },
]);

function App() {
  // return (
  //   <div className="App">
  //     <Home />
  //   </div>
  // );
  return <RouterProvider router={router} />;
}

export default App;

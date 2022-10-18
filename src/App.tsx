import {useRoutes} from "react-router-dom";
import routes from "@/router";
import Home from "./view/home";
import './App.css'
function App() {
    const element  = useRoutes(routes)
  return (
    <div className="App">
        <Home></Home>
    </div>
  )
}

export default App

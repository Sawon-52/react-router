import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="md:w-2/3 mx-auto">
      <Header></Header>
      <div className="w-full min-h-[400px] bg-gray-200 rounded-md p-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

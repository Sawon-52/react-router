import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();

  return (
    <div className="md:w-2/3 mx-auto">
      <Header></Header>
      {navigation.state === "loading" ? "Loading....." : ""}

      <div className="w-full min-h-[400px] bg-gray-200 rounded-md p-5">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

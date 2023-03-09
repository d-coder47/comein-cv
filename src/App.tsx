import "./App.css";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col ">
      <NavBar />
      <Categories />
      <Cards />
    </div>
  );
}

export default App;

import "./App.css";
import CustomCard from "./components/CustomCard";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <NavBar />
      <Categories />
      <CustomCard />
    </div>
  );
}

export default App;

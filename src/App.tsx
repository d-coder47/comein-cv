import "./App.css";
import CustomCard from "./components/CustomCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <NavBar />
      <CustomCard />
    </div>
  );
}

export default App;

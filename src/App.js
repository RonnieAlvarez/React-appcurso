import NavBar from "./components/NavBar";
import "../src/App.css";
import Footer from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Productos" />
      <Footer />
    </div>
  );
}

export default App;

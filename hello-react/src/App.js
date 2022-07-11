import './App.css';
import Navbar from "./componentes/Navbar";
import Header from './componentes/Header';
import Cards from './componentes/Cards';

function App() {
  return (
    <div className="App">
    <div>
    <Navbar />
    <Header/>
    </div>
    <Cards />
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import VendingMachine from "./VendingMachine"
import Dumplings from "./Dumplings"
import Noodles from "./Noodles"
import Cupcake from "./Cupcake"

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <nav>
                  <Link to="/">Vending Machine</Link>
                  <Link to="/dumplings">Dumplings</Link>
                  <Link to="/noodles">Noodles</Link>
                  <Link to="/cupcake">Cupcake </Link>
              </nav>

              <Routes>
                  <Route
                      exact path='/'
                      element={<VendingMachine />}
                  />
                  
                  <Route
                      exact path='/dumplings'
                      element={<Dumplings />}
                  />
                  <Route
                      exact path='/noodles'
                      element={<Noodles />}
                  />
                  <Route
                      exact path='/cupcake'
                      element={<Cupcake />}
                  />
              </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;

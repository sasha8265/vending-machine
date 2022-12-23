import './App.css';
// import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import VendingMachine from "./VendingMachine"

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route
                      exact path='/'
                      element={<VendingMachine />}
                  />
              </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;

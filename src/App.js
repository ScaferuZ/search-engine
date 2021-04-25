import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Navbar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

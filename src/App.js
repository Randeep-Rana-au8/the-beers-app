import { Route } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import Header from "./components/HeaderFolder/Header";
import MainSection from "./components/Sections/MainSection";

import NewDetails from "./pages/product-details/NewDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <MainSection />
      </Route>
      <Route exact path="/shop">
        <AllBeers />
      </Route>
      <Route path="/product-details">
        <NewDetails />
      </Route>
    </div>
  );
}

export default App;

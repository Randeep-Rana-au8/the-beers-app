import { Route } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import Header from "./components/HeaderFolder/Header";
import MainSection from "./components/Sections/MainSection";

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
    </div>
  );
}

export default App;

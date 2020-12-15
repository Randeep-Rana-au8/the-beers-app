import { Route } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import Header from "./components/HeaderFolder/Header";
import MainSection from "./components/Sections/MainSection";
import DetailsPage from "./pages/product-details/DetailsPage";

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
        <DetailsPage />
      </Route>
    </div>
  );
}

export default App;

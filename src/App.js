import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NewAddProduct from "./components/NewAddProduct";
import Product from "./components/Product/Product";
import "react-image-lightbox/style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="content">
          <div className="home">
            <Home />
          </div>
          <div className="newadd">
            <NewAddProduct />
            <Product />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

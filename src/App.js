// import Banner from './components/Banner';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
// import Product from './components/Product';
// import productsData from './productsList';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path="/product-details/:productId" element={<ProductDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

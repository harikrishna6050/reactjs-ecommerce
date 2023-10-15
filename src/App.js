// import Banner from './components/Banner';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Products from './components/Products';
// import Product from './components/Product';
// import productsData from './productsList';

function App() {

  let userCartData = [];

  //Update Added Cart Data into Cart Component
  let updateCartData = (product) => {
    console.log(product);

    userCartData.push(product);

    localStorage.clear();
    localStorage.setItem("cartLength", userCartData.length);
  }
  
  return (
    <div>
      <Router>
        <Header cartCount={userCartData.length}/>

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route excat path='/products' element={<Products/>}></Route>
          <Route exact path="/product-details/:productId" element={<ProductDetails  updateCartData={updateCartData}/>}></Route>
          <Route exact path='/cart' element={<Cart productCartData={userCartData}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

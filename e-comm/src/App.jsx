import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from 'react-router-dom';


import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import './output.css';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        {/* <Route path='/checkout' element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

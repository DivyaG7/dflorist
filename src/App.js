
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/navbar';
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Product } from './pages/Product';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Footer } from './component/Footer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { DisplayItem } from './pages/DisplayItem';
import { products } from './products';
import { PaymentPage } from './component/PaymentPage';

function App() {

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Navbar onSearch={handleSearch}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='/PaymentPage/:index' element={<PaymentPage />} />
              <Route path="/search-results" element={<DisplayItem products={products} />} /> 
            </Routes>
            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

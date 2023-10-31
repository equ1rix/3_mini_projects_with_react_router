import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './ToDoList/ToDo';
import Product from './ProductList/Product';
import Converter from './CurrencyConverter/Converter';

const Home = () => <h2>Home Page</h2>;


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='nav'>
          <ul>
            <li><Link to="/">Home page</Link></li>
            <li><Link to="/todo">ToDo</Link></li>
            <li><Link to="/product">ProductList</Link></li>
            <li><Link to="/converter">Converter</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
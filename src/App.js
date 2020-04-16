import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList/ProductList'
import ProductAdd from './ProductAdd/ProductAdd'

function App() {
  return (
    <div className="App">
      <ProductList/>
      <ProductAdd/>
    </div>
  );
}

export default App;

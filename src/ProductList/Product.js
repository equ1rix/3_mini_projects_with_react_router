import React, { useState } from 'react';
import './Product.css';
import ProductList from './ProductList/ProductList';
import Input from './InputBox/InputBox';

function Product() {

  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('');
  const [products, setProducts] = useState([]);

  const changeValue = (e) => setValue(e.target.value);
  const changeCurrency = (e) => setCurrency(e.target.value);
  
  function onButtonRemove (idToRemove) {
    const updatedItems = products.filter(item => item.id !== idToRemove);
    setProducts(updatedItems);
  } 

  function onButtonClick (){
    if (value && currency) {
      const existingProductIndex = products.findIndex((product) => 
      product.product.replace(/\s/g, "").toLocaleLowerCase() === value.replace(/\s/g, "").toLocaleLowerCase());
      if (existingProductIndex !== -1) {
        const updatedProducts = [...products];
        const newCurrency = parseInt(updatedProducts[existingProductIndex].currency) + parseInt(currency);
        updatedProducts[existingProductIndex] = { id: existingProductIndex + 1, product: value, currency: newCurrency};
        setProducts(updatedProducts);
      } else {
        const newProduct = { id: products.length + 1, product: value, currency: currency };
        setProducts([...products, newProduct]);
      }
      setValue('');
      setCurrency('');
    }
  }

  return (
  <>
    <Input button={onButtonClick} value={value} currency={currency} changeValue={changeValue} changeCurrency={changeCurrency}/>
    <ProductList product={products} button={onButtonRemove}/>
  </>  
  );
} 

export default Product;

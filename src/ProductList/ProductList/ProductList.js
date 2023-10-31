import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css';

function ProductList ({product, button}) {

    if(product && product.length){
     return(
        <>
            <div className='list'>
                {product.map(item => 
                    (<ProductItem key={item.id} {...item} buttonRemove={() => {button(item.id)}}/>))}
            </div>
        </>
    )}

}

export default ProductList;
import React from "react";
import './ProductItem.css';


function ProductItem ({id, product, currency, buttonRemove}) {




    return(
        <div className="item">
            <p contenteditable='true' className="product">{product}</p>
            <p className="currency">{currency}</p>
            <button className="buttonRemove" onClick={() => buttonRemove(id)}>Remove</button>
        </div>
    )
}

export default ProductItem;
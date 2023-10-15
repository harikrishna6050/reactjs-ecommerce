import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../productsList';

function Products() {
    return (
        <div>
            <br />
            <h1 style={{ color: "rgb(58, 68, 138)", marginLeft: "10px" }}>Products</h1>
            <ProductCard products={productsData} />
        </div>
    )
}

export default Products;

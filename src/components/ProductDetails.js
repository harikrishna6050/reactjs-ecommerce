import React, { useEffect, useState } from 'react';
import '../css/ProductDetails.css';
import { useParams } from 'react-router-dom';
import productsList from '../productsList';

function ProductDetails() {
    const { productId } = useParams();
    const [productImageData, setProductImageData] = useState();
    const [selProduct, setSelProduct] = useState(null);

    // Use useEffect to update the product and image data
    useEffect(() => {
        for (let i = 0; i < productsList.length; i++) {
            if (productsList[i].idProduct == productId) {
                const selectedProduct = productsList[i];
                setSelProduct(selectedProduct);
                setProductImageData(selectedProduct.images[0].image);
                break; // Exit the loop once a match is found
            }
        }
    }, [productId]); // Add productId as a dependency

    if (!selProduct) {
        return <div>Loading...</div>;
    }

    let updateSelProductImage = (selProductImageDetails) => {
        setProductImageData(selProductImageDetails.image);
    };

    return (
        <div>
            <div className="d-flex">
                {/* product Images Container */}
                <div>
                    <div className="d-flex">
                        {/* Product Images */}
                        <div>
                            {
                                selProduct.images.map((pdtImage) => {
                                    return (
                                        <div className="card shadow product_image_div" key={pdtImage.idImage}
                                            onClick={() => updateSelProductImage(pdtImage)}
                                        >
                                            <img className="product_img" src={pdtImage.image} alt={`Image_${pdtImage.idImage}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Product selected image */}
                        <div className="card shadow sel-product-image-div">
                            <img className="sel-product-image" src={productImageData} alt="Product Image" />
                        </div>
                    </div>

                    <br />
                    {/* ADD Cart button */}
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn shadow add-cart-btn">
                            <i className="bi bi-cart-plus fs-3"></i>&nbsp;&nbsp;ADD TO CART
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-details-div">
                    {/* Product Name and Price */}
                    <div className="d-flex flex-column">
                        <span className="product-title fs-2">{selProduct.name}</span>
                        <div className='d-flex flex-column'>
                            <span className="fs-5 text-success">Special Price</span>
                            <span className="product-price fs-1">₹{selProduct.price}</span>
                        </div>
                    </div>
                    <br />

                    {/* Product Specifications */}
                    <div>
                        <p className="fs-2 spec-title">Specifications</p>
                        <ul className="product-spec-list">
                            {
                                selProduct.aboutProduct.map((productSpec) => {
                                    return (
                                        <li className="product-spec-li">
                                            <i className="bi bi-bookmark text-primary"></i>&nbsp;{productSpec}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ProductDetails;

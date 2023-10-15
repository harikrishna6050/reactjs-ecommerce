import React, { useEffect, useState } from 'react';
// import productsList from '../productsList';
import "../css/Cart.css";
import cartEmptyImg from "../images/cart_empty.jpg";
import { useNavigate } from 'react-router-dom';

function Cart(props) {

    const navigate = useNavigate();
    // User Cart Data
    const [cartData, setCartData] = useState([]);

    // Total Items
    const [totalProductCount, setTotalProductCount] = useState(0);

    const [totalItemsCoast, setTotalItemsCoast] = useState(0);

    useEffect(() => {
        setCartData(props.productCartData);

        // Dynamic add 'count' property and default value
        for (let i = 0; cartData.length > i; i++) {
            cartData[i].count = 1;
        }
        
        // setCartData(props.productCartData);
        console.log("Product Cart Data : ", cartData);

        /**
         * @description "Call this methods for default reference"
         */
        totalItemsCount(cartData);
        totalCoastOfCartProducts(cartData);
    }, [cartData]);

    /**
     * @description "Total Product Ites Count"
     * @param {*} cartData 
     */
    let totalItemsCount = (cartData) => {
        setTotalProductCount(0);

        let count = 0;
        // caluclate total product added count
        for (let i = 0; cartData.length > i; i++) {
            count = count + cartData[i].count;
        }

        setTotalProductCount(count);
        localStorage.clear();
        localStorage.setItem("cartLength", count);
    }

    /**
     * @description "Calculate Total coast of the selected cart products"
     * @param {*} cartData 
     */
    let totalCoastOfCartProducts = (cartData) => {
        let _totalCoast = 0;

        for (let i = 0; cartData.length > i; i++) {
            _totalCoast = _totalCoast + (cartData[i].count * cartData[i].price);
        }

        setTotalItemsCoast(_totalCoast);
    }

    let productRemoveFromTheCart = (removePdtData) => {
        for (let i = 0; cartData.length > i; i++) {
            if (Number(removePdtData.idProduct) === Number(cartData[i].idProduct)) {
                setTotalItemsCoast(totalItemsCoast - (cartData[i].count * cartData[i].price));
                setTotalProductCount(totalProductCount - cartData[i].count);

                cartData.splice(i, 1);

                localStorage.clear();
                localStorage.setItem("cartLength", cartData.length);
                break;
            }
        }
    }

    let navTo = (_routeName) => {
        switch (_routeName) {
            case "products":
                navigate(`/products`);
                break;

            default:
                navigate("/home");
                break;
        }
    }


    return (
        <div>
            <br />
            <h1 style={{ color: "rgb(58, 68, 138)", marginLeft: "10px" }}>Cart Products</h1>

            {
                Number(totalProductCount) === 0 ?
                    <div className='text-center'>
                        <div className="empty-cart-img-div">
                            <img className="empty-cart-img" src={cartEmptyImg} alt='empty cart' />
                        </div>

                        <p className="empty-cart-title">Missing Cart Products?</p>
                        <button type="button" className="btn btn-primary go-to-pst-btn" onClick={() => navTo("products")}>
                            GO TO PRODUCTS
                        </button>
                    </div>

                    :

                    <div className="d-flex flex-row">
                        {/* User Selected Products DIV conatiner */}
                        <div className='flex-grow-1'>
                            {
                                cartData.map((userCartProduct) => {
                                    return (
                                        <div className="card shadow d-flex flex-column m-2" key={userCartProduct.idProduct}>
                                            <div className="d-flex flex-row">
                                                <div className="cart-pdt-img-div">
                                                    <img className="cart-pdt-img" src={userCartProduct.images[0].image} alt='ProductImage' />
                                                </div>
                                                &nbsp;
                                                <div>
                                                    <h5>{userCartProduct.name}</h5>
                                                    <p>{userCartProduct.aboutProduct[0]}. . .</p>
                                                    <h4>₹{userCartProduct.price}</h4>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <i className="bi bi-trash m-2" style={{ cursor: "pointer", fontSize: "25px" }} onClick={() => productRemoveFromTheCart(userCartProduct)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Selected Products Total Price DIV Container */}
                        <div>
                            <div className="card shadow p-3 m-2" style={{ width: "450px" }}>
                                <h3>Price Details</h3>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium pe-5">Price ({totalProductCount} items)</td>
                                            <td className="fw-medium text-end">₹{totalItemsCoast}</td>
                                        </tr>

                                        <tr>
                                            <td className="fw-medium pe-5">Delivery Chargers</td>
                                            <td className="fw-medium text-end">{Number(totalProductCount) === 0 ? "₹0" : "₹200"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />

                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium pe-5">Total Amount</td>
                                            <td className="fw-medium text-end">₹{totalItemsCoast + (Number(totalProductCount) === 0 ? 0 : 200)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />

                            </div>
                        </div>
                    </div>

            }

        </div>
    )
}

export default Cart;
import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {

    const navigate = useNavigate();
    const [userCartCount, setUserCartCount] = useState(0);

    // useEffect(() => {
    //     setUserCartCount(props.cartCount);
    //     console.log("[Header] User Cart Count : ", userCartCount);
    // }, [userCartCount]);

    setInterval(() => {
        // console.log("1");
        let _cartLength = localStorage.getItem("cartLength");
        // console.log("CartLength", _cartLength);
        setUserCartCount(_cartLength);
    }, 500);

    let navTo = (_routeName) => {
        switch (_routeName) {
            case "home":
                navigate(`/home`);
                break;

            case "cart":
                navigate("/cart");
                break;

            case "products":
                navigate("/products");
                break;
        
            default:
                break;
        }
    }   

    return (
        <div>
            <nav className="navbar navbar-expand-lg header-toolbar">
                <div className="container-fluid">
                    <div className="d-flex flex-column text-center me-5 ms-5" style={{cursor: "pointer"}} onClick={() => navTo("home")}>
                        <i className="bi bi-handbag fs-1"></i>
                        <span className="fw-bold">Online Shop</span>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            &nbsp;
                            <li className="nav-item">
                                {/* <a className="nav-link active fw-bold fs-6" style={{cursor: "pointer"}} aria-current="page"> */}
                                    <Link className="nav-link fw-bold fs-6" to="/home">Home</Link> 
                                {/* </a> */}
                            </li>
                            &nbsp;

                            <li className="nav-item">
                                {/* <a className="nav-link active fw-bold fs-6" style={{cursor: "pointer"}} aria-current="page"> */}
                                    <Link className="nav-link fw-bold fs-6" to="/products">Products</Link> 
                                {/* </a> */}
                            </li>
                        </ul>

                        <i className="bi bi-cart me-4 fs-4 icon-cursor" onClick={() => navTo("cart")}>
                            <span className="position-absolute top-2 start-2 translate-middle badge rounded-pill bg-danger">{userCartCount}</span>
                        </i>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
}

export default Header;
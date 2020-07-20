import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';


function Product() {

    return (
        <div className="container" style={{ justifyContent: "Center" }}>
            <h1>Welcome to Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <div className="row">
                            <div className="col-md">

                                <Link key={keyName}
                                    className="link"
                                    to={`/product/${keyName}`}>
                                    <div className="card" style={{ width: "30rem" }}>
                                        <img src={shoe.img} className="card-img-top" alt="shoe" />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontSize: "20px" }}>{shoe.name}</p>
                                        </div>
                                    </div>

                                    {/* <h4>{shoe.name}</h4>
                                    <img src={shoe.img} height={150} alt="shoe" /> */}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Product;
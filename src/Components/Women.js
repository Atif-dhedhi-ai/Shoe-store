import React from 'react';
import { Link } from 'react-router-dom';
import Shoes1 from './../shoes1.json';

function Women() {

    const shoe = Shoes1["Women"];
    console.log(shoe)
    return (
        <div>
            <h1>Welcome to Women</h1>
            <div className="productContainer">
                {Object.keys(shoe).map(keyName=>{
                    const shoes = shoe[keyName];
                   
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                <h4>{shoes.name}</h4>
                                <img src={shoes.img} height={150} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    );

}

export default Women;
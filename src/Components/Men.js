import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shoes1 from './../shoes1.json';

function Men() {
    const shoe = Shoes1["Men"];
    console.log(shoe)
    return (
        <div>
            <h1>Welcome to Men</h1>
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

export default Men;
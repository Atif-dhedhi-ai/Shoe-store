import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Shoes1 from './../shoes1.json';



function Product1() {
    const { id } = useParams();
    console.log(id)
    const categ = Shoes1[id];
    // console.log(categ)
    return (
        <div>
            <h1>Welcome to {id}</h1>
            <div className="productContainer">
                {Object.keys(categ).map(keyName => {
                    const shoes = categ[keyName];

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

export default Product1;

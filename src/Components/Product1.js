import React from 'react';
import { useParams } from 'react-router-dom';
import Category from './../shoes1.json';
import { Link } from 'react-router-dom';




function Product1() {
    const { id } = useParams();
    const categ = Category[id];
    console.log(categ)
    if (!Category)
        return <h2>Category Not Found!</h2>

    return (
        <div>
            <h1>Welcome to Product Item</h1>
            <div className="productContainer">
                {Object.keys(categ).map(keyName=>{
                    const shoe = categ[keyName];
                    return (  
                        <Link key={keyName} 
                            className="link" 
                            to={`/product1/${keyName}`}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Product1;

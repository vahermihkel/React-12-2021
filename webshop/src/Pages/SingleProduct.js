import { useState, useEffect } from "react";

function SingleProduct() {
    const productCode = window.location.href.split("toode/")[1];
    console.log(productCode);

    const [product, updateProduct] = useState({name: "", model: ""});

    useEffect(() => 
        fetch("https://webshop-12-2021-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => {
            return response.json();
        })
        .then(object => {
            let products = [];
            for (const key in object) {
                products.push(object[key]);
            }
            const product = products.find(prod => prod.code === productCode);
            updateProduct(product);
            // eslint-disable-next-line
        }), [] 
    );

    return (
        <div>      
            <div>{product.name}</div>
            <div>{product.model}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.code}</div>
        </div>)
}

export default SingleProduct;
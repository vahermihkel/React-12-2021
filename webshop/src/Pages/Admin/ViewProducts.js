import { useState, useEffect } from "react";
import AdminProduct from "../../Components/AdminProduct"

function ViewProducts() {
    const [products, updateProducts] = useState([]);

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
            updateProducts(products);
        }), []
    );
    

    return (<div>
        {products.map(product => <AdminProduct key={product.code} prod={product} />)}
    </div>)
}

export default ViewProducts;
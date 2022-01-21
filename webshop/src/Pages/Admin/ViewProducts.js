import { useState, useEffect } from "react";
import AdminProduct from "../../Components/AdminProduct";
import Button from "react-bootstrap/Button";

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

    // POST, PUT, DELETE, GET
    // POST - lisa üks juurde
    // PUT - lisa juurde millega asendad ära kõik mis juba olemas on
    // DELETE - kustutamiseks
    // GET - võtmiseks
    
    function deleteAllProductsFromDb() {
        fetch("https://webshop-12-2021-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            { 
                method: "PUT", 
                body: JSON.stringify([])
            }
        );
        updateProducts([]);
    }

    return (<div>
        <br />
        <Button variant="danger" onClick={deleteAllProductsFromDb}>Kustuta kõik tooted andmebaasist</Button>
        <br /><br />
        {products.map(product => <AdminProduct key={product.code} prod={product} />)}
    </div>)
}

export default ViewProducts;
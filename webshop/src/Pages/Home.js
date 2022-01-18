import { useState, useEffect } from "react";
import Product from "../Components/Product";

function Home() {
    const [products, updateProducts] = useState([]);

    // useEffect takistab uuesti laadimist
    useEffect(() => 
        fetch("https://webshop-12-2021-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => {
            return response.json();
        })
        .then(object => {
            // [{…},{…},{…}]
            let products = [];
                                // {-Mt7mm87yHlYK7UOIdeO: {…1}, -MthViLn9Mb_vFleEyyg: {…2}, -MthVkd_s7f2rU__Z-C9: {…}, -MthbQShi9eBC2HhgUCm: {…}, -MthbVlD54lrDg3Zfza5: {…}}
        //  -Mt7mm87yHlYK7UOIdeO
        // [].push({…1}) 
        //  -MthViLn9Mb_vFleEyyg
        // [{…1}].push({…2})
            for (const key in object) {
                products.push(object[key]);
            }
            console.log(object)
            console.log(products);
            updateProducts(products);
        }), []
    );
    

    return (<div>
        {products.map(product => <Product key={product.code} prod={product} />)}
    </div>)
}

export default Home;
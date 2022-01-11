
function AddProduct() {
    function addToDatabase() {
        const product = {name: "Rolex"};
        fetch("https://webshop-12-2021-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            { 
                method: "POST", 
                body: JSON.stringify(product)
            }
        );
    }

    return (<div><button onClick={addToDatabase}>Lisa andmebaasi</button></div>)
}

export default AddProduct;
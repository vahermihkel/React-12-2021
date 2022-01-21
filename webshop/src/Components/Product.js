import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// [{
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
// },
// {
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
// },
// {
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
// }]

// { cartProduct: {
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
//     }, 
//  quantity: number
// }

// [{ cartProduct: {
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
//     }, 
//  quantity: 4
// },{ cartProduct: {
//     name: string,
//     model: string,
//     description: string,
//     price: string,
//     code: string,
//     category: string,
//     }, 
//  quantity: 7
// }]

function Product(props) {
    const { t } = useTranslation();

                // product = {name: "Rolex"}
    function onAddToCart(product) {
        if (sessionStorage.getItem("cartItems")) {
 //                                      JSON.parse("[{name: "Rolex"}]")
//              vana -products = [{name: "Rolex"}];
//              uus - product = [{cartProduct: {name: "Rolex"}, quantity: 4}]
            let products = JSON.parse(sessionStorage.getItem("cartItems"));
            const index = products.findIndex(prod => prod.cartProduct.code === product.code);
            if (index === -1) {
//  vana - products = [{name: "Rolex"},{name: "Rolex"}];
//  uus - products = [{cartProduct: {name: "Rolex"}, quantity: 4}, {cartProduct: {name: "Teine"}, quantity: 1}]
                products.push({cartProduct: product, quantity: 1});
            } else {
                products[index].quantity++;
//              products[index].quantity += 1;
//              products[index].quantity = products[index].quantity + 1;
            }
            sessionStorage.setItem("cartItems",JSON.stringify(products));
        } else {
                                            // product = {name: "Rolex"}
                                            // [{name: "Rolex"}]
                                            // "[{name: "Rolex"}]"
            sessionStorage.setItem("cartItems",JSON.stringify([{cartProduct: product, quantity: 1}]));
        }
    }

    return (
    <div>
        <Link to={`toode/${props.prod.code}`}>
            <div>{props.prod.name}</div>
            <div>{props.prod.model}</div>
            <div>{props.prod.price}</div>
        </Link>
        <Button onClick={() => onAddToCart(props.prod)}>{t("home.add-cart-button")}</Button>
    </div>)
}

export default Product;
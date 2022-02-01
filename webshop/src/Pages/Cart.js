import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ParcelMachines from '../Components/ParcelMachines';

function Cart() {
    const [cartProducts, updateCartProducts] = useState(getCartItems());

    function getCartItems() {
        if (sessionStorage.getItem("cartItems")) {
            return JSON.parse(sessionStorage.getItem("cartItems"));
        } else {
            return [];
        }
    }

    function calculateSumOfCart() {
        let sumOfCart = 0;
        cartProducts.forEach(product => sumOfCart = sumOfCart + product.cartProduct.price * product.quantity);
        return sumOfCart;
    }

    function onDeleteOneFromCart(product) {
        const index = cartProducts.indexOf(product);
        if (cartProducts[index].quantity > 1) {
            cartProducts[index].quantity--;
            updateCartProducts(cartProducts.slice());
            sessionStorage.setItem("cartItems",JSON.stringify(cartProducts));
        } else if (cartProducts[index].quantity === 1) {
            onDeleteFromCart(product);
        }
    }

    function onAddToCart(product) {
        const index = cartProducts.indexOf(product);
        cartProducts[index].quantity++;
        updateCartProducts(cartProducts.slice());
        sessionStorage.setItem("cartItems",JSON.stringify(cartProducts));
    }

    function onDeleteFromCart(product) {
        const index = cartProducts.indexOf(product);
        cartProducts.splice(index,1);
        updateCartProducts(cartProducts.slice());
        sessionStorage.setItem("cartItems",JSON.stringify(cartProducts));
    }

    function onPay() {
        const randomNumber = Math.floor(Math.random()*899999 + 100000);
        const everyPayData = {
            "api_username": "92ddcfab96e34a5f",
            "account_name": "EUR3D1",
            "amount": calculateSumOfCart(),
            "order_reference": randomNumber,
            "nonce": new Date() + "92ddcfab96e34a5f" + randomNumber,
            "timestamp": new Date(),
            "customer_url": "https://webshop-2021.web.app/ostukorv"
            }

        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
            { 
                method: "POST", 
                body: JSON.stringify(everyPayData),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
                }
            }
        ).then(response => {
            return response.json();
        })
        .then(object => {
           window.location.href = object.payment_link;
        });
    }

    return (<div className='cart-wrapper'>
        {cartProducts.map(product => 
        <div key={product.cartProduct.code} className='cart-item'>
            <span className='cart-item-name'>{product.cartProduct.name} </span>
            <span className='cart-item-price'>{product.cartProduct.price}€ </span> 
            <img className="cart-button" onClick={() => onDeleteOneFromCart(product)} src="/cart/minus.png" alt="" />
            <span className="cart-item-quantity">{product.quantity}tk </span>
            <img className="cart-button" onClick={() => onAddToCart(product)} src="/cart/add.png" alt="" /> 
            <span className='cart-item-total'>  {product.cartProduct.price * product.quantity} €</span>
            <img className="cart-button delete" onClick={() => onDeleteFromCart(product)} src="/cart/delete.png" alt="" />
        </div>)}
        <ParcelMachines />
        { cartProducts.length === 0 && <div>Ostukorv on tühi</div>}
        { cartProducts.length > 0 && 
            <div className='cart-sum'>
                <div>KOKKU: {calculateSumOfCart()} €</div>
                <Button onClick={onPay}>Maksma</Button>
            </div>
            }
    </div>)
}

export default Cart;
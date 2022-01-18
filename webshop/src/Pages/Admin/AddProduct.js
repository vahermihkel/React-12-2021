import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

function AddProduct() {
    const nameRef = useRef(); // Rolex
    const modelRef = useRef(); // T-112
    const descriptionRef = useRef();
    const priceRef = useRef();
    const codeRef = useRef();
    const categoryRef = useRef();
    const { t } = useTranslation();

    function addToDatabase() {
        const product = {
            name: nameRef.current.value,
            model: modelRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            code: codeRef.current.value,
            category: categoryRef.current.value,
        };
        // aadress kuhu tooted pannakse
        fetch("https://webshop-12-2021-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            { 
                method: "POST", 
                body: JSON.stringify(product)
            }
        );
    }

    return (
    <div>
        <Form.Label>{t("product.name")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-name")} ref={nameRef} /> <br />
        <Form.Label>{t("product.model")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-model")} ref={modelRef} /> <br />
        <Form.Label>{t("product.description")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-description")} ref={descriptionRef} /> <br />
        <Form.Label>{t("product.price")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-price")} ref={priceRef} /> <br />
        <Form.Label>{t("product.code")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-code")} ref={codeRef} /> <br />
        <Form.Label>{t("product.category")}</Form.Label> <br />
        <Form.Control placeholder={t("product.product-category")} ref={categoryRef} /> <br />
        <div className="center">
            <Button variant="dark" onClick={addToDatabase}>{t("product.add-button")}</Button>
        </div>
    </div>)
}

export default AddProduct;
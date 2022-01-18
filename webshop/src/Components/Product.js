import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Product(props) {
    const { t } = useTranslation();

    return (
    <div>
        <Link to={`toode/${props.prod.code}`}>
            <div>{props.prod.name}</div>
            <div>{props.prod.model}</div>
            <div>{props.prod.price}</div>
        </Link>
        <Button>{t("home.add-cart-button")}</Button>
    </div>)
}

export default Product;
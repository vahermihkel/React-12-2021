import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function AdminProduct(props) {
    const { t } = useTranslation();

    return (<div>
        <div>{props.prod.name}</div>
        <div>{props.prod.model}</div>
        <div>{props.prod.price}</div>
        <Button variant='warning'>{t("admin.change-product-button")}</Button>
        <Button variant='danger'>{t("admin.delete-product-button")}</Button>
    </div>)
}

export default AdminProduct;
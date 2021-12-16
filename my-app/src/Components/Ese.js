import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function Ese(props) {
    const { t } = useTranslation();

    // const notify = () => toast("Wow so easy!");
    // function notify() {
    //     toast("Wow so easy!");
    // }

    function lisaOstukorvi() {
        if (sessionStorage.getItem("ostukorv")) {
            let ostukorviTooted = JSON.parse(sessionStorage.getItem("ostukorv"));
            ostukorviTooted.push(props);
            sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted));
        } else {
            sessionStorage.setItem("ostukorv", JSON.stringify([props]));
        }
        toast.success("Lisatud edukalt ostukorvi!", {
            position: "bottom-right",
            theme: "dark"
            });
    }

    return (
        <div>
            <Link to={`/toode/${props.pealkiri.replace(" ","-").toLowerCase()}`} className="link">
                <div className="center">Pealkiri: {props.pealkiri}</div>
                <div className="center">Hind: {props.hind.toFixed(2)}</div>
                <div className="center">Kategooria: {props.kategooria}</div>
                { props.pic && <div className="center"><img className="item-picture" src={props.pic} alt="Toode" /> <br/></div>}
            </Link>
            <div className="center">
                <Button variant="outline-primary" onClick={lisaOstukorvi}>{t('cart.cart-button')}</Button>
            </div>    
            <br /><br />
            <ToastContainer />
        </div>)
}

export default Ese;
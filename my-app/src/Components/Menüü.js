import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Menüü() {
    const { i18n } = useTranslation();

    function muudaKeel(keel) {
        i18n.changeLanguage(keel);
        localStorage.setItem("keel", keel);
    }

    // ilma useEffectita läheks see funktsioon kogu aeg uuesti käima kui see component
    //  uuesti laetakse

    // see component laetakse uuesti, sest i18n laeb uuesti componendi

    // ilma useEffectita:
    // muudaKeel("K")  ->
    // muudaKeel {i18n.changeLanguage()} --- see laeb componendi uuesti
    // muudaKeel("K") ->
    // muudaKeel {i18n.changeLanguage()} --- see laeb componendi uuesti
    // muudaKeel("K") ->
    // muudaKeel {i18n.changeLanguage()} --- see laeb componendi uuesti
    useEffect(() => {
        muudaKeel(localStorage.getItem("keel"));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
   
    return (
        <header className="menüü">
            <Link to="/">
                <div className="center">
                    <Button>Avalehele</Button>
                </div>
            </Link>
            <Link to="/ostukorv">
                <div className="center">
                    <Button>Ostukorvi</Button>
                </div>
            </Link>
            <Link to="/admin">
                <div className="center">
                    <Button>Admini vaatesse</Button>
                </div>
            </Link>
            {/* muudaKeel('EE') */}
            <Button onClick={() => muudaKeel("ee")}>EE</Button> 
             {/* muudaKeel('EN') */}
            <Button onClick={() => muudaKeel("en")}>EN</Button>
        </header>)
}

export default Menüü;
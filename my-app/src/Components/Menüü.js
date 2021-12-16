import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

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
    });
   
    return (
        <header className="menüü">
            <Link to="/">
                <div className="center">
                    <button>Avalehele</button>
                </div>
            </Link>
            <Link to="/ostukorv">
                <div className="center">
                    <button>Ostukorvi</button>
                </div>
            </Link>
            <Link to="/admin">
                <div className="center">
                    <button>Admini vaatesse</button>
                </div>
            </Link>
            {/* muudaKeel('EE') */}
            <button onClick={() => muudaKeel("ee")}>EE</button> 
             {/* muudaKeel('EN') */}
            <button onClick={() => muudaKeel("en")}>EN</button>
        </header>)
}

export default Menüü;
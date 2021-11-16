import { Link } from 'react-router-dom';

function Menüü() {
    return (
        <header className="menüü">
            <Link to="/">
                <button>Avalehele</button>
            </Link>
            <Link to="/ostukorv">
                <button>Ostukorvi</button>
            </Link>
        </header>)
}

export default Menüü;
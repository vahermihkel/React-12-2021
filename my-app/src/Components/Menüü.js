import { Link } from 'react-router-dom';

function Menüü() {
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
        </header>)
}

export default Menüü;
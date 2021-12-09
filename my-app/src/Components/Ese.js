import { Link } from "react-router-dom";

function Ese(võtanVastu) {
    return (
        <div>
            <Link to={`/toode/${võtanVastu.pealkiri.replace(" ","-").toLowerCase()}`} className="link">
                <div className="center">Pealkiri: {võtanVastu.pealkiri}</div>
                <div className="center">Hind: {võtanVastu.hind.toFixed(2)}</div>
                <div className="center">Kategooria: {võtanVastu.kategooria}</div>
                { võtanVastu.pic && <div className="center"><img className="item-picture" src={võtanVastu.pic} alt="Toode" /> <br/></div>}
            </Link>
            <div className="center">
                <button>Lisa ostukorvi</button>
            </div>    
            <br /><br />
        </div>)
}

export default Ese;
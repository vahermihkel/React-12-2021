import { Link } from "react-router-dom";

function Ese(props) {
    function lisaOstukorvi() {
        if (sessionStorage.getItem("ostukorv")) {
            let ostukorviTooted = JSON.parse(sessionStorage.getItem("ostukorv"));
            ostukorviTooted.push(props);
            sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted));
        } else {
            sessionStorage.setItem("ostukorv", JSON.stringify([props]));
        }
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
                <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>
            </div>    
            <br /><br />
        </div>)
}

export default Ese;
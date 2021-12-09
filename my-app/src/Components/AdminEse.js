import { Link } from "react-router-dom";

function AdminEse(võtanVastu) {
    function kustutaHandler(esemePealkiri) {
        võtanVastu.onDeleteToode(esemePealkiri);
    }

    // const kustutaEse = () => {
    //     console.log("kontroll, et töötab");
    // }

    return (
        <div>
            <div className="center">Pealkiri: {võtanVastu.toode.nimi}</div>
            <div className="center">Hind: {võtanVastu.toode.maksumus.toFixed(2)}</div>
            <div className="center">Kategooria: {võtanVastu.toode.kategooria}</div>
            <div className="center">
            { võtanVastu.toode.pilt && <div><img className="item-picture" src={võtanVastu.toode.pilt} alt="Toode" /> <br/></div>}
                <Link to={`/muuda/${võtanVastu.toode.nimi.replace(" ","-").toLowerCase()}`}>
                    <button>Muuda</button>
                </Link>
                <button onClick={() => kustutaHandler(võtanVastu.toode.nimi)}>Kustuta</button>
            </div>    
            <br /><br />
        </div> )
}

export default AdminEse;
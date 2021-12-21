import { Link } from "react-router-dom";

function Admin() {

    // tahan kustutada ühte eset
        // 1. võtan localStorage-st massiivi: [{1},{2},{3}] 
        //              panen ta let toode abil muutujasse ja võtan JSON.parse abil jutumärgid ära
        // 2. otsin õige eseme järjekorranumbri üles unikaalsuse tunnuse abil: 2
        //          .findIndex() abil  .findIndex(ese => ese.OMADUS === OMADUSEGA_MIS_SAAN_ÜLEVALT)
        // 3. kustutan järjekorranumbriga 2 saadud massiivist: [{1},{2}]
        //          .splice(järjekorraNumber,1)
        // 4. panen localStorage-sse uuesti üles
        //           localStorage.setItem abil ja pean tegema JSON.stringify(tooted)
        //             ehk selle massiivi stringi kujule ehk jutumärgid ümber

                // "Vitamin well"

    return (<div>
        <Link to="/">
            <button>Tagasi</button>
        </Link> 
        <Link to="/lisa">
            <div className="center">
                <button>Lisa toode</button>
            </div>
        </Link>
        <Link to="/admin-esemed">
            <div className="center">
                <button>Muuda/kustuta tooteid</button>
            </div>
        </Link>
        <Link to="/kategooriad">
            <div className="center">
                <button>Halda kategooriaid</button>
            </div>
        </Link>
    </div>)
}

export default Admin;
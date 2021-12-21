import { useRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function Kategooriad() {
    const kategooriaRef = useRef();
    const [kategooriad, uuendaKategooriad] = useState(saaKategooriad());
    const { t } = useTranslation();

    function lisaKategooria(event) { // event on sündmus, mille abil saan uurida sündmusega tekkinud väärtusi
        event.preventDefault(); // tavapärane käitumine on JavaScriptil formi sisestades refreshi tegemine
                // selleks, et me refreshi ei teeks, peame kirjutama, et ära tee tavapärast käitumist
                // prevent = väldi
                // default = tavapärast
        const uusKategooria = kategooriaRef.current.value;
        if (localStorage.getItem("kategooriad")) {
            let kategooriad = JSON.parse(localStorage.getItem("kategooriad"));
            kategooriad.push(uusKategooria);
            localStorage.setItem("kategooriad", JSON.stringify(kategooriad));
            uuendaKategooriad(kategooriad);
        } else {
            localStorage.setItem("kategooriad", JSON.stringify([uusKategooria]));
            uuendaKategooriad([uusKategooria]);
        }
        kategooriaRef.current.value = "";
        toast.success("Kategooria edukalt lisatud!", {
            position: "bottom-right",
            theme: "dark"
            });
    }

    function saaKategooriad() {
        if (localStorage.getItem("kategooriad")) {
            return JSON.parse(localStorage.getItem("kategooriad"));
        } else {
            return [];
        }
    }

    // function kustutaKategooria(kategooria) {
    //     let kat = JSON.parse(localStorage.getItem("kategooriad"));
    //     let j2rjekorraNumber = kat.indexOf(kategooria);
    //     kat.splice(j2rjekorraNumber);
    //     localStorage.setItem("kategooriad", JSON.stringify(kat));
    //     uuendaKategooriad(kat);
    // }

    function kustutaKategooria(kategooria) {
        let j2rjekorraNumber = kategooriad.indexOf(kategooria);
        kategooriad.splice(j2rjekorraNumber,1); // splice on kustutamiseks
        localStorage.setItem("kategooriad", JSON.stringify(kategooriad));
        uuendaKategooriad(kategooriad.slice()); // slice katkestab viite, 
                    //  aga jätab alles väärtuse mis oli sellel viitel
                    //  slice on mälukoha kaotamiseks
        toast.success("Kategooria edukalt kustutatud!", {
            position: "bottom-right",
            theme: "dark"
            });
    }

    // selgita mis vahe on slice, splice, split
    // split on sõnalise muutuja tükeldamiseks (window.location.href.split("muuda/"))

    return <div>
            <form onSubmit={lisaKategooria}>
                <label>Kategooria</label> <br />
                <input ref={kategooriaRef} type="text" /> <br />
                <button>{t('categories.categories-button')}</button> <br />
            </form> <br />
            <div>{kategooriad.map(kategooria => 
                <div key={kategooria}>
                    <div>{kategooria}</div>
                    <button onClick={()=>kustutaKategooria(kategooria)}>X</button>
                </div>)}</div>
                <ToastContainer />
           </div>
}

export default Kategooriad;
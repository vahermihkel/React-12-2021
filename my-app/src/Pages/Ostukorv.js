import { useState } from 'react';
import { Link } from 'react-router-dom';

function Ostukorv() {
    const [ostukorviTooted, uuendaOstukorvi] = useState(saaOstukorv())

    function saaOstukorv() {
        if (sessionStorage.getItem("ostukorv")) {
            return JSON.parse(sessionStorage.getItem("ostukorv"));
        } else {
            return [];
        }
    }

    function kustutaOstukorvist(toodeNimi) {
        let tooted = JSON.parse(sessionStorage.getItem("ostukorv"));
        let toodeIndex = tooted.findIndex(ese => ese.pealkiri === toodeNimi);
        if (toodeIndex !== -1) {
            tooted.splice(toodeIndex,1);
            sessionStorage.setItem("ostukorv",JSON.stringify(tooted));
            uuendaOstukorvi(tooted); // tooted pannakse sessionStorage-sse
            // uuendaOstukorvi(saaOstukorv());
        }
    }

    function tyhjendaOstukorv() {
        sessionStorage.setItem("ostukorv",JSON.stringify([]));
        uuendaOstukorvi([]);
    }

    function arvutaOstukorviSumma() {
        let ostukorviSumma = 0;
        // .map() --- võetakse igaüks noole eest ja asenedatakse sellega mis on noole järel
        // ASENDUS, seda tehakse alati lõpuni välja

        // .find() --- võetakse igaüks noole eest ja otsitakse sellele tõest väärtust
        // ELEMENDI LEIDMINE, seda tehakse nii kaua kuni tuleb tõene väärtus (true)

        // .findIndex() --- võetakse igaüks noole eest ja otsitakse sellele tõest väärtust
        // ELEMENDI INDEXI LEIDMINE, seda tehakse nii kaua kuni tuleb tõene väärtus (true)

        // .forEach() --- võetakse igaüks noole eest ja tehakse mingit koodilõiku
        // KORDAMINE IGAÜHELE, seda tehakse alati lõpuni välja
        let tooted = JSON.parse(sessionStorage.getItem("ostukorv"));
        // [{pealkiri: "Coca", hind: 4}, {pealkiri: "Fanta", hind: 2}, {pealkiri: "Sprite", hind: 3}]
        // .forEach({pealkiri: "Coca", hind: 4} => 4  = 0 + 4 )
        // .forEach({pealkiri: "Fanta", hind: 2} => 6  = 4 + 2 )
        // .forEach({pealkiri: "Sprite", hind: 3} => 9  = 6 + 3 )
        tooted.forEach(toode => 
            ostukorviSumma = ostukorviSumma + toode.hind
            );
        return ostukorviSumma;
    }

    function maksma() {
        fetch("URL",{ // EVERYPAY URL
            method: "POST", // MIS ON SELLE URLi API MEETODI TÜÜP
            body: {
                võti: "väärtus"
            }
        })
        // https://support.every-pay.com/downloads/everypay_apiv4_integration_documentation.pdf
    }

    
    return (<div>
        <Link to="/">
            <button>Tagasi</button>
        </Link>
        { ostukorviTooted.length > 0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button> }
        {ostukorviTooted.map(ostukorviEse => 
        <div> 
            <div className="center">{ostukorviEse.pealkiri}</div>
            <div className="center">{ostukorviEse.hind}</div> 
            <div className="center">{ostukorviEse.kategooria}</div> 
            { ostukorviEse.pic && <div className="center"><img className="item-picture" src={ostukorviEse.pic} alt="Toode" /> <br/></div>}
            <div className="center">
                <button onClick={() => kustutaOstukorvist(ostukorviEse.pealkiri)}>X</button>
            </div>
        </div>)}
        { ostukorviTooted.length > 0 && <div>Kogusumma: {arvutaOstukorviSumma()}</div>}
        { ostukorviTooted.length === 0 && <div className="center"><br/> Ostukorv on tühi</div>}
        <button onClick={maksma}>Maksma</button>
    </div>)
}

export default Ostukorv;
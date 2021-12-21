import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function MuudaEse() {
    const nimiRef = useRef();
    const maksumusRef = useRef();
    const katRef = useRef();
    const piltRef = useRef();

    const tooteNimetus = window.location.href.split("muuda/")[1];
    const tooted = JSON.parse(localStorage.getItem("tooted"));
    const toodeIndex = tooted.findIndex(t => t.nimi.replace(" ","-").toLowerCase() === tooteNimetus);
    const toode = tooted[toodeIndex];

    const [toodeState, setToode] = useState(toode);


    // {nimi: "Coca cola", maksumus: 2, kat: "coca", pilt: "https://assets.iceland.co.uk/i/iceland/coca-cola_original_taste_1l_72842_T1.jpg"},
    // {nimi: "Fanta", maksumus: 1.5, kat: "coca"},
    // {nimi: "Sprite", maksumus: 1.5, kat: "coca"},
    // {nimi: "Vitamin well", maksumus: 3, kat: "water", pilt: "https://static.netshop.ee/c/p/2019/06/106554TiF2a1e.jpg"},
    // {nimi: "Vichy", maksumus: 2.5, kat: "water", pilt: "vichy.jpg"},
    // const toode = tooted[2];

    console.log(toode);

    function saaKategooriad() {
        if (localStorage.getItem("kategooriad")) {
            return JSON.parse(localStorage.getItem("kategooriad"));
        } else {
            return [];
        }
    }

    function muudaToode() {
        console.log("muutmise nupp töötab");
        
        const uuendatudToode = {
            nimi: nimiRef.current.value, 
            maksumus: Number(maksumusRef.current.value), 
            kat: katRef.current.value, 
            pilt: piltRef.current.value,
        };

        tooted[toodeIndex] = uuendatudToode;
        setToode(uuendatudToode);
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }

    return (
    <div>
         <Link to="/admin">
            <button>Tagasi</button>
        </Link> <br/><br/>
        <div className="center">Pealkiri: {toodeState.nimi}</div>
        <div className="center">Hind: {toodeState.maksumus.toFixed(2)}</div>
        <div className="center">Kategooria: {toodeState.kat}</div>
        { toodeState.pilt && <div className="center"><img className="item-picture" src={toodeState.pilt} alt="Toode" /> <br/></div>}   
        <label>Nimetus</label> <br/>
        <input ref={nimiRef} defaultValue={toode.nimi} type="text" /> <br/>
        <label>Hind</label> <br/>
        <input ref={maksumusRef} defaultValue={toode.maksumus} type="number" /> <br/>
        <label>Kategooria</label> <br/>
        {/* <input ref={katRef} defaultValue={toode.kat} type="text" /> <br/> */}
        <select ref={katRef} defaultValue={toode.kat}>
            <option>Vali kategooria</option>
            {saaKategooriad().map(kategooria => <option 
                key={kategooria} value={kategooria}>{kategooria}</option>)}
        </select> <br />
        <label>Pilt</label> <br/>
        <input ref={piltRef} defaultValue={toode.pilt} type="text" /> <br/>
        <button onClick={muudaToode}>Muuda toode</button>
    </div>)
}

export default MuudaEse;
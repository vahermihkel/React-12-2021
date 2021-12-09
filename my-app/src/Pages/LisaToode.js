import { useRef } from 'react';  // HOOK
import { Link } from 'react-router-dom';
// 1. document.getElementById läheb otsima uuesti HTMLst sellist elementi ja tema väärtust
//      hook võtab selle automaatselt
// 2. document.getElementById kasutades võib juhtuda, et meil on lehel mitu sarnast id väärtust
//      mitu sarnast hooki ei saa panna

function LisaToode() {
    const nimetusRef = useRef(); // konstantne väärtus, rohkem ei saa tema väärtust muuta
    const hindRef = useRef();
    const katRef = useRef();
    const piltRef = useRef();


    function salvestaToode() {
        // let nimetusValue = document.getElementById("nimetus").value;
        const nimetusValue = nimetusRef.current.value;
        const hindValue = Number(hindRef.current.value);
        const katValue = katRef.current.value;
        const piltValue = piltRef.current.value;
        
        const toode = {
            nimi: nimetusValue, 
            maksumus: hindValue, 
            kat: katValue, 
            pilt: piltValue,
        };
        if (localStorage.getItem("tooted")) {
            let tooted = JSON.parse(localStorage.getItem("tooted"));
            tooted.push(toode);
            localStorage.setItem("tooted", JSON.stringify(tooted));
        } else {
            localStorage.setItem("tooted", JSON.stringify([toode]));
        }
    }

    return (
    <div>
        <Link to="/admin">
            <button>Tagasi</button>
        </Link> <br/><br/>
        <label>Nimetus</label> <br/>
        <input ref={nimetusRef} type="text" /> <br/>
        <label>Hind</label> <br/>
        <input ref={hindRef} type="number" /> <br/>
        <label>Kategooria</label> <br/>
        <input ref={katRef} type="text" /> <br/>
        <label>Pilt</label> <br/>
        <input ref={piltRef} type="text" /> <br/>
        <button onClick={salvestaToode}>Lisa toode</button>
    </div>)
}

export default LisaToode;
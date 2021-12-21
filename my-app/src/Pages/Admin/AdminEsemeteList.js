import { useState } from "react";
import AdminEse from "../../Components/AdminEse";

function AdminEsemeteList() {
    const [stateTooted,setStateTooted] = useState(saaEsemed());

    function saaEsemed(){
        if (localStorage.getItem("tooted")) {
            return JSON.parse(localStorage.getItem("tooted"));
        } else {
            let tooted = [
                {nimi: "Coca cola", maksumus: 2, kat: "coca", pilt: "https://assets.iceland.co.uk/i/iceland/coca-cola_original_taste_1l_72842_T1.jpg"},
                {nimi: "Fanta", maksumus: 1.5, kat: "coca"},
                {nimi: "Sprite", maksumus: 1.5, kat: "coca"},
                {nimi: "Vitamin well", maksumus: 3, kat: "water", pilt: "https://static.netshop.ee/c/p/2019/06/106554TiF2a1e.jpg"},
                {nimi: "Vichy", maksumus: 2.5, kat: "water", pilt: "vichy.jpg"},
            ];
            localStorage.setItem("tooted",JSON.stringify(tooted));
            return tooted;
        }
    }

    function kustutaEse(esemePealkiri) {
        // [{nimi: "Coca cola", maksumus: 2, kat: "coca", pilt: "https://assets.iceland.co.uk/i/iceland/coca-cola_original_taste_1l_72842_T1.jpg"},
        // {nimi: "Fanta", maksumus: 1.5, kat: "coca"},
        // {nimi: "Sprite", maksumus: 1.5, kat: "coca"},
        // {nimi: "Vitamin well", maksumus: 2, kat: "water", pilt: "https://static.netshop.ee/c/p/2019/06/106554TiF2a1e.jpg"},
        // {nimi: "Vitamin well", maksumus: 3, kat: "water", pilt: "vichy.jpg"}].findIndex()     
        let tooted = JSON.parse(localStorage.getItem("tooted"));
        // .findIndex({nimi: "Coca cola", maksumus: 2...} => "Coca cola" === "Vitamin well" ) false
        // .findIndex({nimi: "Fanta", maksumus: 1.5...} =>  "Fanta" === "Vitamin well" ) false
        // .findIndex({nimi: "Sprite", maksumus: 2...} =>  "Sprite" === "Vitamin well" ) false
        // .findIndex({nimi: "Vitamin well", maksumus: 2...} => "Vitamin well" === "Vitamin well" ) true
        // .findIndex({nimi: "Vitamin well", maksumus: 3...} =>    ) SIIA TA ENAM EI JÕUA
        let toodeIndex = tooted.findIndex(ese => ese.nimi === esemePealkiri);
        if (toodeIndex !== -1) {
            tooted.splice(toodeIndex,1);
            localStorage.setItem("tooted",JSON.stringify(tooted));
            setStateTooted(tooted);
        }
    }

    return (<div>
        {
            stateTooted.map(toode => 
                <AdminEse key={toode.nimi} toode={toode} onDeleteToode={kustutaEse} />
            )
        }
    </div>)
}

export default AdminEsemeteList;
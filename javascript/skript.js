document.getElementById("lisa-vanus").addEventListener('click',()=>{
    localStorage.setItem("vanusLisatud","jah lisati");
    let vanuseInput = document.getElementById("vanus").value;
    // "[2009,1969,1977,2005,1956,1998,1966,2000]" - kuna ei saa pushida
    vanused.push(2021-vanuseInput);
    localStorage.setItem("vanused", vanused);    
    document.getElementById("vanused").textContent = vanused;
    let localStorageValue = localStorage.getItem("vanusLisatud");
    document.getElementById("localstorage").textContent = localStorageValue;
})

document.getElementById("lisa-toode").addEventListener('click',()=>{
    localStorage.setItem("vanusLisatud","ei lisatud");
    let nimiInput = document.getElementById("nimi").value;
    let maksumusInput = document.getElementById("maksumus").value;
    let kategooriaInput = document.getElementById("kategooria").value;
    console.log(nimiInput);
    console.log(maksumusInput);
    console.log(kategooriaInput);
    massiiv.push(
            {
                nimi: nimiInput, 
                maksumus: maksumusInput, 
                kat: kategooriaInput
            }
        );
    console.log(massiiv);
    document.getElementById("massiiv").textContent = massiiv.map(toode => toode.nimi);
    localStorage.setItem("tooted", JSON.stringify(massiiv));
    let localStorageValue = localStorage.getItem("vanusLisatud");
    document.getElementById("localstorage").textContent = localStorageValue;
})

let massiiv = [
    {nimi: "Coca cola", maksumus: 2, kat: "coca", aktiivneEse: true},
    {nimi: "Fanta", maksumus: 1.5, kat: "coca", aktiivneEse: false},
    {nimi: "Sprite", maksumus: 1.5, kat: "coca", aktiivneEse: true},
    {nimi: "Vitamin well", maksumus: 3, kat: "water", aktiivneEse: true},
    {nimi: "Vichy", maksumus: 2.5, kat: "water", aktiivneEse: false},
];

if (localStorage.getItem("tooted")) {
    massiiv = JSON.parse(localStorage.getItem("tooted"));
}

function saaMassiiviVäärtused() {
    return [
        {nimi: "Coca cola", maksumus: 2, kat: "coca"},
        {nimi: "Fanta", maksumus: 1.5, kat: "coca"},
        {nimi: "Sprite", maksumus: 1.5, kat: "coca"},
        {nimi: "Vitamin well", maksumus: 3, kat: "WATER"},
        {nimi: "Vichy", maksumus: 2.5, kat: "water"},
    ];
}

let vanused = [12,52,44,16,65,23,55,123,13,123,125,51,123,31,123];

vanused = vanused.map(vanus => 2021-vanus);

document.getElementById("vanused").textContent = vanused;


let kategooriad = massiiv.map(toode => toode.kat.substring(0,1).toUpperCase() + toode.kat.substring(1).toLowerCase());

document.getElementById("massiiv").textContent = kategooriad;

let localStorageValue = localStorage.getItem("vanusLisatud");
document.getElementById("localstorage").textContent = localStorageValue;


if (localStorage.getItem("vanused")) {
    vanused = localStorage.getItem("vanused").split(",");
}
document.getElementById("vanused").textContent = vanused;

// 1. SÕNALINE väärtus ehk STRING --- "jutumärkide sees"
// 2. NUMBRILINE väärtus ehk NUMBER --- 5
// 3. KAHENDVÄÄRTUS väärtus ehk BOOLEAN --- true/false

// panna massiivi või teha neist objekti
// ["asda","sdaa","sadasd"]
// {id: 312312, nimetus: "Tere1", kasAktiivne: true, päritolu: {riik: "Iraan", number: 32}}

let vanused2 = [12,52,44,16,65,23,55,123,13,123,125,51,123,31];

document.getElementById("vanused2").textContent = vanused2;

document.getElementById("lisa").addEventListener('click',()=>{
    vanused2.push(67);
    document.getElementById("vanused2").textContent = vanused2;
})

document.getElementById("kustuta-esimene").addEventListener('click',()=>{
    vanused2.splice(0,1);
    document.getElementById("vanused2").textContent = vanused2;
})

document.getElementById("kustuta-viimane").addEventListener('click',()=>{
    let viimaseIndex = vanused2.length - 1;
    vanused2.splice(viimaseIndex,1);
    document.getElementById("vanused2").textContent = vanused2;
})

document.getElementById("muuda-esimene").addEventListener('click',()=>{
    vanused2[0] = 999;
    document.getElementById("vanused2").textContent = vanused2;
})

document.getElementById("muuda-viimane").addEventListener('click',()=>{
    let viimaseIndex = vanused2.length - 1;
    vanused2[viimaseIndex] = 888;
    document.getElementById("vanused2").textContent = vanused2;
})

document.getElementById("tyhjenda").addEventListener('click',()=>{
    vanused2 = [];
    document.getElementById("vanused2").textContent = vanused2;
})
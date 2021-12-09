
function ÜksEse() {
    // SAMMUD KUIDAS ME TOOTENIMETUST LEIAME:
    // console.log(window); 
    // console.log(window.location);
    // console.log(window.location.href); --- brauseris oleva aadressi
    // console.log(window.location.href.split("toode/")); --- tükeldame toode/ alusel vasakuks pooleks ja paremaks pooleks
    // console.log(window.location.href.split("toode/")[0]); --- nii saaksime vasakut poolt
    // console.log(window.location.href.split("toode/")[1]); --- nii võtame parema poole
    const tooteNimetus = window.location.href.split("toode/")[1];
    const tooted = JSON.parse(localStorage.getItem("tooted"));
    const toode = tooted.find(t => t.nimi.replace(" ","-").toLowerCase() === tooteNimetus);
    console.log(toode);

    return (
    <div>
        <div className="center">Pealkiri: {toode.nimi}</div>
        <div className="center">Hind: {toode.maksumus.toFixed(2)}</div>
        <div className="center">Kategooria: {toode.kat}</div>
        { toode.pilt && <div className="center"><img className="item-picture" src={toode.pilt} alt="Toode" /> <br/></div>}   
    </div>)
}

export default ÜksEse;
import Ese from "../Components/Ese";
import Carousel from 'react-bootstrap/Carousel';

// 1. andmebaas
// 2. brauserisse
// 3. faili kirjutada - 

function Kodu () {
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

    return (<div>
        <Carousel>
  <Carousel.Item>
    <img
      className="carousel-picture"
      src="vichy.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-picture"
      src="logo512.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-picture"
      src="logo192.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        {
            saaEsemed().map(toode => 
                <Ese 
                    key={toode.nimi} 
                    pealkiri={toode.nimi} 
                    hind={toode.maksumus} 
                    kategooria={toode.kat}
                    pic={toode.pilt} />
            )
        }
        {/* <Ese pealkiri="Coca cola" hind="2" kategooria="coca" />
        <Ese pealkiri="Fanta" hind="1.5" kategooria="coca"/>
        <Ese pealkiri="Sprite" hind="1.5" kategooria="coca" />
        <Ese pealkiri="Vitamin well" hind="3" kategooria="water" />
        <Ese pealkiri="Vichy" hind="2.5" kategooria="water" /> */}
    </div>)
}

export default Kodu;
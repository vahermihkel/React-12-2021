import { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function ParchelMachines() {
  const [parcelMachines, updateParcelMachines] = useState([]);
  const [country, updateCountry] = useState("EE");

  useEffect(() => 
    fetch("https://www.omniva.ee/locations.json")
    .then(response => {
        return response.json();
    })
    .then(object => {
        updateParcelMachines(object);
    }), []
  );


  return (
    <div>      
          <button onClick={() => updateCountry("EE")}>EE</button>
          <button onClick={() => updateCountry("LV")}>LV</button>
          <button onClick={() => updateCountry("LT")}>LT</button>
          <DropdownButton id="dropdown-basic-button" title="Vali pakiautomaat">
              {parcelMachines.filter(element => element.A0_NAME === country)
                    .map(element => <Dropdown.Item key={element.ZIP}>{element.NAME}</Dropdown.Item>)}
          </DropdownButton>
    </div>);
}

export default ParchelMachines;
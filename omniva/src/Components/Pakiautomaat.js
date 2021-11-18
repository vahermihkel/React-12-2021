
function Pakiautomaat(omadused) {
    return (
    <select>
        {omadused.automaadid
          .filter(o => o.A1_NAME === omadused.maakond)
          .map(objektMidaKäinLäbi =>
          <option>{objektMidaKäinLäbi.NAME}</option>
          )}
    </select>)
}

export default Pakiautomaat;
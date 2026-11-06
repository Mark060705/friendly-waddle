import { useKonyvContext } from "../contexts/TablazatContext";
import KonyvSor from "./Sor";

function KonyvTabla() {
  const { konyvek } = useKonyvContext();

  return (
    <table>
      <thead>
        <tr>
          <th className="id">Index</th>
          <th className="cim">Cím</th>
          <th className="szerzo">Szerző</th>
          <th className="darabszam">Darabszám</th>
          <th className="ar">Ár</th>
          <th className="gomb"></th>
        </tr>
      </thead>
      <tbody>
        {konyvek.map((konyv, index) => (
          <KonyvSor key={konyv.id} konyv={konyv} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default KonyvTabla;
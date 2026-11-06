import { useKonyvContext } from "../contexts/TablazatContext";
import KonyvSor from "./Sor";

function KonyvTabla() {
  const { konyvek } = useKonyvContext();

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Cím</th>
          <th>Szerző</th>
          <th>Darabszám</th>
          <th>Ár</th>
          <th></th>
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
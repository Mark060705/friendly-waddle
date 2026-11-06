import type { KonyvTipus } from "../adatok";
import Sor from "./Sor";

interface TablazatProps {
  konyvek: KonyvTipus[];
}

function Tablazat({ konyvek }: TablazatProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Cím</th>
          <th>Szerző</th>
          <th>Darabszám</th>
          <th>Ár</th>
        </tr>
      </thead>
      <tbody>
        {konyvek.map((konyv, index) => (
          <Sor key={konyv.id} konyv={konyv} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Tablazat;
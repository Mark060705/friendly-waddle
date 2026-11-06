import type { KonyvTipus } from "../adatok";
import { useTablazatContext } from "../contexts/TablazatContext";


interface SorProps {
  konyv: KonyvTipus;
  index: number;
}

function Sor({ konyv, index }: SorProps) {
    const { allapotKezelo } = useTablazatContext();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{konyv.cim}</td>
      <td>{konyv.szerzo}</td>
      <td>{konyv.darabszam}</td>
      <td>{konyv.ar}</td>
    </tr>
  );
}

export default Sor;
import type { KonyvTipus } from "../adatok";
import { useKonyvContext } from "../contexts/TablazatContext";


interface KonyvSorProps {
  konyv: KonyvTipus;
  index: number;
}

function KonyvSor({ konyv, index }: KonyvSorProps) {
    const { konyvTorlese } = useKonyvContext();

  return (
    <tr>
      <td className="id">{konyv.id}</td>
      <td className="cim">{konyv.cim}</td>
      <td className="szerzo">{konyv.szerzo}</td>
      <td className="darabszam">{konyv.darabszam}</td>
      <td className="ar">{konyv.ar}</td>
      <td className="gomb">
        <button type="button" onClick={() => konyvTorlese(konyv.id)}>
          Törlés
        </button>
      </td>
    </tr>
  );
}

export default KonyvSor;
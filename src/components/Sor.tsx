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
      <td>{index + 1}</td>
      <td>{konyv.cim}</td>
      <td>{konyv.szerzo}</td>
      <td>{konyv.darabszam}</td>
      <td>{konyv.ar}</td>
      <td>
        <button type="button" onClick={() => konyvTorlese(konyv.id)}>
          Törlés
        </button>
      </td>
    </tr>
  );
}

export default KonyvSor;
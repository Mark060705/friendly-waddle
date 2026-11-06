import { useUrlapContext } from "../contexts/UrlapContext";

function Urlap() {
    const { konyvHozzaadasa } = useUrlapContext();

    function kezelesBekuldes(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const cim = String(formData.get("cim")).trim();
        const szerzo = String(formData.get("szerzo")).trim();
        const darabszam = Number(formData.get("darabszam"));
        const ar = Number(formData.get("ar"));

        if (!cim || !szerzo || !Number.isFinite(darabszam) || !Number.isFinite(ar)) {
            return;
        }

        konyvHozzaadasa({ cim, szerzo, darabszam, ar });
        event.currentTarget.reset();
    }

    return (
        <div>
            <h2>Új könyv hozzáadása</h2>
            <form onSubmit={kezelesBekuldes}>
                <label htmlFor="cim">Cím:</label>
                <input type="text" id="cim" name="cim" required />
                <label htmlFor="szerzo">Szerző:</label>
                <input type="text" id="szerzo" name="szerzo" required />
                <label htmlFor="darabszam">Darabszám:</label>
                <input type="number" id="darabszam" name="darabszam" min="0" step="1" required />
                <label htmlFor="ar">Ár:</label>
                <input type="number" id="ar" name="ar" min="0" step="1" required />
                <button type="submit">Hozzáadás</button>
            </form>
        </div>
    );
}

export default Urlap;
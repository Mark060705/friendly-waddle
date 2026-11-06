export interface KonyvTipus {
    id: number;
    cim: string;
    szerzo: string;
    darabszam: number;
    ar: number;
}



export const KONYVEK: KonyvTipus[] = [
  {
    id: 1,
    cim: "Harry Potter és a bölcsek köve",
    szerzo: "J. K. Rowling",
    darabszam: 10,
    ar: 1500
  },
  {
    id: 2,
    cim: "A kis herceg",
    szerzo: "Antoine de Saint-Exupéry",
    darabszam: 5,
    ar: 1200
  },
  {
    id: 3,
    cim: "Egri csillagok",
    szerzo: "Gárdonyi Géza",
    darabszam: 8,
    ar: 1000
  },
  {
    id: 4,
    cim: "1984",
    szerzo: "George Orwell",
    darabszam: 6,
    ar: 1300
  },
  {
    id: 5,
    cim: "A Pál utcai fiúk",
    szerzo: "Molnár Ferenc",
    darabszam: 7,
    ar: 1100
  }
];


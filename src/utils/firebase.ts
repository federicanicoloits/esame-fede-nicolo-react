// Import the functions
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMhprL7rKMtiUNxnG5GzRbDZWk8cSLtyg",
  authDomain: "discoteca-fd244.firebaseapp.com",
  projectId: "discoteca-fd244",
  storageBucket: "discoteca-fd244.appspot.com",
  messagingSenderId: "618067413540",
  appId: "1:618067413540:web:034b765e5c1d13c208a6b1",
  databaseURL:
    "https://discoteca-fd244-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

// PER SCRIVERE SUL DB

export function writeReservation(
  nome: string,
  cognome: string,
  email: string,
  idEvento: number,
  ore: string,
  database: Database
) {
  push(ref(database, "reservations/anonimous/"), {
    nome: nome,
    cognome: cognome,
    email: email,
    evento: idEvento,
    ore: ore,
  });
}

export function writeReservationWithAuth(
  nome: string,
  cognome: string,
  email: string,
  idEvento: number,
  ore: string,
  database: Database,
  idUser: string
) {
  push(ref(database, "reservations/users/" + idUser), {
    nome: nome,
    cognome: cognome,
    email: email,
    evento: idEvento,
    ore: ore,
  });
}

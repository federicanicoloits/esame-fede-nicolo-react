import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  auth,
  db,
  writeReservation,
  writeReservationWithAuth,
} from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

type TypeBasicModal = {
  SlotOrario: string;
  IdEvento: number;
};

const BasicModal = (BasicModalType: TypeBasicModal) => {
  const { SlotOrario, IdEvento } = BasicModalType;
  const [open, setOpen] = React.useState(false);

  const [nome, setNome] = useState<string>("");
  const [cognome, setCognome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iscrizioneAttiva, setIscrizioneAttiva] = useState(false);

  const handleOpen = () => setOpen(!open);

  const azzera = () => {
    setNome("");
    setCognome("");
    setEmail("");
    setPassword("");
    setIscrizioneAttiva(false);
  };
  const handleIscrizioneToggle = () => {
    setIscrizioneAttiva(!iscrizioneAttiva);
    // Resetta la password quando l'utente cambia lo stato di iscrizione
    setPassword("");
  };

  return (
    <div className="">
      <Button onClick={handleOpen} variant="gradient">
        {SlotOrario}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Prenota alle {SlotOrario}</DialogHeader>
        <form
          onSubmit={() => {
            if (!iscrizioneAttiva) {
              writeReservation(nome, cognome, email, IdEvento, SlotOrario, db);
            }
            azzera();
            handleOpen();
            if (iscrizioneAttiva) {
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const userId = userCredential.user.uid;
                  writeReservationWithAuth(
                    nome,
                    cognome,
                    email,
                    IdEvento,
                    SlotOrario,
                    db,
                    userId
                  );
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error(errorCode + ": " + errorMessage);
                });
            }
          }}
        >
          <DialogBody>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(n) => setNome(n.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="cognome">Cognome</label>
              <input
                type="text"
                name="cognome"
                value={cognome}
                onChange={(n) => setCognome(n.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(n) => setEmail(n.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <div>Do you want to register?</div>
              <label htmlFor="check">Yes</label>
              <input
                name="check"
                type="checkbox"
                checked={iscrizioneAttiva}
                onChange={handleIscrizioneToggle}
              />
            </div>
            {iscrizioneAttiva && (
              <div>
                <label htmlFor="password">Choose a password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(n) => setPassword(n.target.value)}
                  className="w-full"
                />
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Go Back</span>
            </Button>
            <Button variant="gradient" color="green" type="submit">
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};
export default BasicModal;

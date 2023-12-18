import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  db,
  writeReservation,
  writeReservationWithAuth,
} from "../utils/firebase";

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
  // const [password, setPassword] = useState<string>("");
  // const [iscrizione, setIscrizione] = useState(false);

  const [loggato, setLoggato] = useState(false);

  useEffect(() => {
    const emailSession = sessionStorage.getItem("email");
    if (emailSession) {
      setLoggato(true);
      setEmail(emailSession);
    }
  }, []);

  const handleOpen = () => setOpen(!open);

  const azzera = () => {
    setNome("");
    setCognome("");
    setEmail("");
  };

  return (
    <div className="">
      <Button onClick={handleOpen} variant="gradient">
        {SlotOrario}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Prenota alle {SlotOrario}</DialogHeader>
        <form>
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
                readOnly={loggato}
                type="email"
                name="email"
                value={email}
                onChange={(n) => setEmail(n.target.value)}
                className="w-full"
              />
            </div>
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
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                if (!loggato) {
                  writeReservation(
                    nome,
                    cognome,
                    email,
                    IdEvento,
                    SlotOrario,
                    db
                  );
                }
                azzera();
                handleOpen();
                const uid = sessionStorage.getItem("uid");
                if (loggato && uid) {
                  writeReservationWithAuth(
                    nome,
                    cognome,
                    email,
                    IdEvento,
                    SlotOrario,
                    db,
                    uid
                  );
                }
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};
export default BasicModal;

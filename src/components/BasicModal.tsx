import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { db, writeReservation } from "../utils/firebase";

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
  const handleOpen = () => setOpen(!open);

  return (
    <div className="">
      <Button onClick={handleOpen} variant="gradient">
        {SlotOrario}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Prenota alle {SlotOrario}</DialogHeader>
        <DialogBody>
          Nome <br />
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(n) => setNome(n.target.value)}
            className="w-full"
          />
          <br />
          Cognome <br />
          <input
            type="text"
            name="cognome"
            value={cognome}
            onChange={(n) => setCognome(n.target.value)}
            className="w-full"
          />
          <br />
          Email <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(n) => setEmail(n.target.value)}
            className="w-full"
          />
          <br />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Torna Indietro</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() =>
              writeReservation(nome, cognome, email, IdEvento, SlotOrario, db)
            }
          >
            Conferma
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
export default BasicModal;

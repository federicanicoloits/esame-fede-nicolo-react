import { useEffect, useState } from "react";
import { EventType } from "../repo/event.types";
import { getEvent } from "../repo";
import { useParams } from "react-router-dom";

export const useEvent = () => {
  const [event, setEvent] = useState<EventType | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<string>();
  let idInt: number = -1;
  if (id) {
    idInt = parseInt(id);
  } else {
    console.error("Valore fornito non valido");
  }
  useEffect(() => {
    getEvent(idInt)
      .then((event) => {
        setEvent(event);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idInt]);

  return { event, isLoading };
};

import { useEffect, useState } from "react";
import { EventType } from "../repo/event.types";
import { getEvent } from "../repo";
import { useNavigate, useParams } from "react-router-dom";

export const useEvent = () => {
  const [event, setEvent] = useState<EventType | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<string>();
  const navigate = useNavigate();
  let idInt: number = -1;
  if (id) {
    idInt = parseInt(id);
  }

  useEffect(() => {
    getEvent(idInt)
      .then((event) => {
        setEvent(event);
        setIsLoading(false);
      })
      .catch(() => {
        navigate("*");
      });
  }, [id]);

  return { event, isLoading };
};

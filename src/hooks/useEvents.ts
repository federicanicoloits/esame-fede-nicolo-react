import { useEffect, useState } from "react";
import { EventTypeTotal } from "../repo/event.types";
import { getEvents } from "../repo";

export const useEvents = () => {
  const [events, setEvents] = useState<EventTypeTotal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getEvents()
      .then((events) => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { events, isLoading };
};

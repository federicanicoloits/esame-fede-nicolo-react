import { EventType, EventTypeTotal } from "./event.types";
import dayjs from "dayjs";
const URL = "https://its-events.davide-mantovani.workers.dev/events/";

export const getEvents = async (): Promise<EventTypeTotal[]> => {
  const res: Response = await fetch(URL);
  if (res.status === 200) {
    const data = (await res.json()) as EventTypeTotal[];
    data.map((dato) => {
      const dat = dayjs(dato.date);
      dato.datatotale = dat.format("DD/MM/YYYY").toString();

      const numberOfSlots = 5;
      const incrementMinutes = 15;
      dato.dataora = Array.from({ length: numberOfSlots }, (_, index) =>
        dat
          .add(index * incrementMinutes, "m")
          .format("HH:mm")
          .toString()
      );
      return dato;
    });
    return data;
  }
  return [];
};

export const getEvent = async (id: number): Promise<EventType | null> => {
  const res: Response = await fetch(URL + id);
  if (res.status === 200) {
    const data = (await res.json()) as EventType;
    const dat = dayjs(data.date);
    data.datatotale = dat.format("DD/MM/YYYY").toString();

    const numberOfSlots = 5;
    const incrementMinutes = 15;
    data.dataora = Array.from({ length: numberOfSlots }, (_, index) =>
      dat
        .add(index * incrementMinutes, "m")
        .format("HH:mm")
        .toString()
    );
    return data;
  }
  return null;
};

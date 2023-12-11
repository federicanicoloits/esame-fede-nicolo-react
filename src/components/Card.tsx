import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { EventTypeTotal } from "../repo/event.types";
import { Link } from "react-router-dom";
type EventCardType = {
  evento: EventTypeTotal;
  detailPath: string;
};
const CardDefault = (Evento: EventCardType) => {
  const { evento, detailPath } = Evento;
  return (
    <Card className="m-6 w-96 flex flex-col justify-between">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={evento.coverImage} alt={evento.name} />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          {evento.name}
        </Typography>
        <Typography>{evento.description.short}</Typography>
        <Typography>Date: {evento.datatotale}</Typography>
        <Typography>Hours: {evento.dataora.join(" ")}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link to={detailPath}>Book now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardDefault;

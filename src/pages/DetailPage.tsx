import BasicModal from "../components/BasicModal";
import { useEvent } from "../hooks/useEvent";

const DetailPage = () => {
  const { event, isLoading } = useEvent();

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h1 className="text-center text-[40px] md:text-[60px]">{event?.name}</h1>
      <div className="flex flex-col md:text-center items-center m-5">
        <div className="mx-3 md:w-[30%]">
          <img
            src={event?.coverImage}
            alt={event?.name}
            className="rounded-3xl md:h-2/3 w-full"
          />
        </div>

        <div className="w-[70%]">
          <div>
            {event?.description.long.map((desc, i) => {
              return (
                <div key={i}>
                  {desc} <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-5 text-center">
        <h2 className="text-[20px] md:text-[40px]">Informazioni</h2>
        <h3 className="text-[18px] md:text-[30px]">Data</h3> {event?.datatotale}
        <h3 className="text-[18px] md:text-[30px]">Slot Orari</h3>
        <p>
          Prenota l'orario di entrata cliccando su uno degli orari in basso.
        </p>
        <div className="flex justify-center flex-wrap">
          {event?.dataora.map((SlotOrario) => {
            return (
              <div className="mx-5 mt-3">
                <BasicModal SlotOrario={SlotOrario} IdEvento={event.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

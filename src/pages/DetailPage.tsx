import BasicModal from "../components/BasicModal";
import { useEvent } from "../hooks/useEvent";
import quadratoMezzo from "../assets/quadrato-mezzo.png";
import lineaCerchio from "../assets/linea-cerchio.png";
const DetailPage = () => {
  const { event, isLoading } = useEvent();

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="text-white m-5">
      <h1 className=" text-[40px] md:text-[60px] ks">
        <span className="ks">{event?.name}</span>
      </h1>
      <div className="md:flex justify-end">
        <img src={quadratoMezzo} className="h-full hidden md:block" />
      </div>
      <div className="md:flex">
        <img src={lineaCerchio} className="hidden md:block" />

        <div className="md:w-[50%] p-3 md:flex md:flex-col md:justify-between">
          {event?.datatotale}
          {event?.description.long.map((desc, i) => {
            return (
              <div key={i}>
                {desc} <br />
              </div>
            );
          })}
          <h2 className="text-3xl text-white ks text-center">Important Info</h2>
          <h3 className="text-2xl text-white">Price</h3>
          <p>{event?.price}</p>
          <h3 className="text-2xl text-white">Dresscode</h3>
          <p>{event?.dresscode}</p>
          <h3 className="text-2xl text-white">Included</h3>
          <p>{event?.includedDrinks.join(", ")}</p>
          <h3 className="text-2xl text-white">Tags</h3>
          {event?.tags.join(", ")}

          {event?.isAperitivoIncluded && (
            <>
              <h3 className="text-2xl text-white">Aperitivo Included</h3>
              <p>
                {event?.includedDishes.map((dish, i) => {
                  return (
                    <div key={i}>
                      <h4 className="text-xl text-white">{dish.name}</h4>
                      <p>{dish.description}</p>
                      <p>Allergens: {dish.allergens.join(", ")}</p>
                    </div>
                  );
                })}
              </p>
            </>
          )}

          <div className="flex justify-center">
            <img src={quadratoMezzo} className="h-full" />
          </div>
        </div>
        <div className="md:w-[30%]">
          <img
            src={event?.coverImage}
            alt={event?.name}
            className="rounded-3xl w-full"
          />
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl text-center text-white ks">Book Now</h2>
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

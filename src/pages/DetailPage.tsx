import BasicModal from "../components/BasicModal";
import { useEvent } from "../hooks/useEvent";
import quadratoMezzo from "../assets/quadrato-mezzo.png";
import lineaCerchio from "../assets/linea-cerchio.png";
import { GiAmpleDress } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { GiRaddish } from "react-icons/gi";
const DetailPage = () => {
  const { event, isLoading } = useEvent();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh] w-[100wv]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            fill="#FF156D"
            stroke="#FF156D"
            strokeWidth="15"
            transform-origin="center"
            d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="0;120"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      </div>
    );
  }

  return (
    <div className="text-white m-5">
      <h1 className=" text-[40px] md:text-[60px] ks">
        <span className="ks">{event?.name}</span>
      </h1>
      <div className="lg:flex justify-end">
        <img src={quadratoMezzo} className="h-full hidden lg:block" />
      </div>
      <div className="lg:flex">
        <img src={lineaCerchio} className="hidden lg:block" />

        <div className="lg:w-[50%] p-3 lg:flex lg:flex-col lg:justify-between">
          {event?.datatotale}
          {event?.description.long.map((desc, i) => {
            return (
              <div key={i}>
                {desc} <br />
              </div>
            );
          })}
          <h2 className="text-3xl text-white ks text-center">Important Info</h2>
          <h3 className="text-2xl text-white flex">
            <MdOutlinePriceCheck />
            <span className="px-3">Price</span>
          </h3>
          <p>{event?.price}</p>
          <h3 className="text-2xl text-white flex">
            <GiAmpleDress />
            <span className="px-3">Dresscode</span>
          </h3>
          <p>{event?.dresscode}</p>
          <h3 className="text-2xl text-white flex">
            <IoStar />
            <span className="px-3">Included</span>
          </h3>
          <p>{event?.includedDrinks.join(", ")}</p>
          <h3 className="text-2xl text-white flex">
            <IoPricetags />
            <span className="px-3">Tags</span>
          </h3>
          {event?.tags.join(", ")}

          {event?.isAperitivoIncluded && (
            <>
              <h3 className="text-2xl text-white flex">
                <BiSolidDish />
                <span className="px-3">Aperitivo Included</span>
              </h3>
              <p>
                {event?.includedDishes.map((dish, i) => {
                  return (
                    <div key={i}>
                      <h4 className="text-xl text-white flex">
                        <GiRaddish />
                        <span className="px-3">{dish.name}</span>
                      </h4>
                      <p>{dish.description}</p>
                      {dish.allergens.length > 0 && (
                        <p>Allergens: {dish.allergens.join(", ")}</p>
                      )}
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
        <div className="lg:w-[30%]">
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

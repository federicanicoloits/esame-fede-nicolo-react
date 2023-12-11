import { useEvents } from "../hooks/useEvents";
import CardDefault from "../components/Card";
import nightclubImage from "../assets/nightclub.jpg";
import quadratoMezzo from "../assets/quadrato-mezzo.png";
import lineaCerchio from "../assets/linea-cerchio.png";
const HomePage = () => {
  const { events, isLoading } = useEvents();
  if (isLoading) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
      <div className="flex items-center justify-center h-[120vh] md:grid md:grid-cols-[2fr_1fr_3fr_1fr_1fr_2fr_3fr] md:grid-rows-[1fr_10fr_1fr]">
        <img
          src={quadratoMezzo}
          className="hidden md:block md:col-start-6 md:col-end-7 md:row-start-1 md:row-end-2"
        />
        <img
          src={quadratoMezzo}
          className="hidden md:block md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4"
        />
        <img
          src={lineaCerchio}
          className="hidden md:block md:col-start-7 md:col-end-8 md:row-start-2 md:row-end-3"
        />
        <div className="md:md:col-start-1 md:col-end-8 md:row-start-2 md:row-end-3 md:flex md:items-center md:justify-center">
          <div className="m-8 md:m-0 md:w-1/2">
            <h1 className="text-6xl md:text-8xl text-center text-white">
              Welcome to <br />
              <span className="ks">Nightclub200</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="object-fill w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-[50%]"
              src={nightclubImage}
              alt="People in nightclub"
            />
          </div>
        </div>
      </div>
      <h2 className="text-5xl md:text-7xl text-center text-white mb-7">
        Events
      </h2>
      <div className="flex flex-wrap justify-center">
        {events.map((event, i) => {
          return (
            <CardDefault
              key={i}
              evento={event}
              detailPath={`/detail/${event?.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;

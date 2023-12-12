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
      <div className="flex items-center justify-center h-[120vh] md:grid lg:grid-cols-[2fr_1fr_3fr_1fr_1fr_2fr_3fr] lg:grid-rows-[1fr_10fr_1fr]">
        <img
          src={quadratoMezzo}
          className="hidden lg:block lg:col-start-6 lg:col-end-7 lg:row-start-1 lg:row-end-2"
        />
        <img
          src={quadratoMezzo}
          className="hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
        />
        <img
          src={lineaCerchio}
          className="hidden lg:block lg:col-start-7 lg:col-end-8 lg:row-start-2 lg:row-end-3"
        />
        <div className="lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:flex lg:items-center lg:justify-center">
          <div className="m-8 lg:m-0 lg:w-1/2">
            <h1 className="text-6xl md:text-8xl text-center text-white">
              Welcome to <br />
              <span className="ks">Nightclub200</span>
            </h1>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="object-fill w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] rounded-[50%]"
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

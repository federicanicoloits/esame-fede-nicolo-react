import { useEvents } from "../hooks/useEvents";
import CardDefault from "../components/Card";
import nightclubImage from "../assets/nightclub.jpg";
import quadratoMezzo from "../assets/quadrato-mezzo.png";
import lineaCerchio from "../assets/linea-cerchio.png";
const HomePage = () => {
  const { events, isLoading } = useEvents();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh] w-[100wv]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="h-[200px] w-[200px]"
        >
          <path
            fill="#FFFFFF"
            stroke="#FFFFFF"
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

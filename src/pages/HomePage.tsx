import { useEvents } from "../hooks/useEvents";
import CardDefault from "../components/Card";
const HomePage = () => {
  const { events, isLoading } = useEvents();
  if (isLoading) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
      <h1 className="text-center text-[120px] md:text-[200px]">Eventi</h1>
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

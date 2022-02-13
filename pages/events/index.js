import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../data/data";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
      router.push(`/events/${year}/${month}`)
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

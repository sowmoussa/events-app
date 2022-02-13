import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../data/data";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading</p>;
  }
  const year = +filterData[0];
  const month = +filterData[1];
  console.log(year, month);
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;

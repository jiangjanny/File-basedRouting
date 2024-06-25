import { Fragment } from 'react'
import { useRouter } from 'next/routers'
import { getFeaturedEvents } from "../../dummy-datas"
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/events/error-alert'
function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getFeaturedEvents(eventId)

    if (!event) {
        return <ErrorAlert>
            <p>No event found!</p>
        </ErrorAlert>
    }
    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
        />
        <EventContent>
            <p>{event.descriptions}</p>
        </EventContent>
    </Fragment>
}

export default EventDetailPage
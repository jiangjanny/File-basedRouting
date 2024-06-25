import Link from "next/link";
import ArrowRightIcon from '../icons/arrow-right-icons'
function EventItem(props) {
    const { title, image, date, location, id } = props;

    const hummanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: 'long',
        year: numeric
    })

    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return <li>
        <img src={'/' + image} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{hummanReadableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div>
                <Link href={exploreLink}>
                    <span> Explore Event</span>
                    <span><ArrowRightIcon /></span>
                </Link>
            </div>
        </div>
    </li>
}

export default EventItem
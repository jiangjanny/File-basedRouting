function MainHeader(props) {
    return <header>
        <div>
            <Link href="/">NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>Browes All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainHeader
import MainHeader from './main-header'
function Layout(props) {
    return <Fragment>
        <main>
            <MainHeader />
            {props.childrens}
        </main>
    </Fragment>
}
export default Layout
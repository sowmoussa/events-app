import { Fragment } from "react/cjs/react.production.min";
import Header from "./main-header";

function Layout(props) {
    return <Fragment>
        <Header></Header>
        <main>
            {props.children}
        </main>
    </Fragment>
}

export default Layout;
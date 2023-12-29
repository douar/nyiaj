import {Link} from "react-router-dom";

function Nav() {

    return (
        <div className="nav-container">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/budget">Budget</Link>
            <Link className="nav-item" to="/taxes">Taxes</Link>
        </div>
    )
}

export default Nav
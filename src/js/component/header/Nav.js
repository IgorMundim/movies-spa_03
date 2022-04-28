import { Link } from "react-router-dom"

export const Nav = ({movieId}) => (

        <nav className="header_navigation">
            <ul className="nav-menu">
                <li className="nav-menu__item">
                    <Link className="nav-menu__link" to="/" >Home</Link>
                </li>
                {/* <li className="nav-menu__item">
                    <Link className="nav-menu__link" to="/about">Detalhes</Link>
                </li> */}
                <li className="nav-menu__item">
                    <Link className="nav-menu__link" to={`/about/${movieId}`}> Movie</Link>
                </li>
            </ul>
        </nav> 

)
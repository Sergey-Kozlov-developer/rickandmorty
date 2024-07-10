import logo from "@/assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    const routes = [
        { to: "/", page: "Home" },
        { to: "/favorites", page: "Favorite" },
        { to: "/about", page: "About" },
    ];

    return (
        <>
            <div className="header">
                <img src={logo} className="header__logo" alt="" />
                <nav className="nav">
                    <ul className="header__nav">
                        {routes.map((route, index) => (
                            <NavLink key={index} to={route.to}>
                                {route.page}
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HeaderComponent;

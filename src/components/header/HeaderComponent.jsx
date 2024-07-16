import logo from "@/assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    const routes = [
        { to: "/", page: "Home" },
        // { to: "/favorites", page: "Favorite" },
        // { to: "/about", page: "About" },
    ];

    return (
        <>
            <div className="header">
                <img src={logo} className="logo" alt="" />
                <div className="nav">
                    <ul className="nav-link">
                        {routes.map((route, index) => (
                            <NavLink
                                key={index}
                                to={route.to}
                                className={({ isActive }) =>
                                    isActive ? "active" : "nav-link"
                                }
                            >
                                {route.page}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;

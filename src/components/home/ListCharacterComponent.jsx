import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListCharacterComponent = ({
    name,
    status,
    species,
    gender,
    image,
    created,
    location,
}) => {
    return (
        <>
            <div className="card-container">
                <div className="card-img">
                    <img src={image} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-text">
                        <Link className="card-link">{name}</Link>
                        <span className="status">
                            <span
                                className={
                                    status === "Alive"
                                        ? "status-icon"
                                        : "status-icon_red" &&
                                          status === "unknown"
                                        ? "status-icon_unknown"
                                        : "status-icon_red"
                                }
                            ></span>
                            {status} - {species}
                        </span>
                    </div>
                    <div className="location">
                        <span className="location-text">
                            Last known location:
                        </span>
                        <span className="location-name">{location.name}</span>
                    </div>
                    <div className="gender">{gender}</div>
                    <div className="first-seen">{created}</div>
                </div>
            </div>
        </>
    );
};

export default ListCharacterComponent;

ListCharacterComponent.propTypes = {
    // id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string,
    created: PropTypes.string,
    location: PropTypes.object,
};

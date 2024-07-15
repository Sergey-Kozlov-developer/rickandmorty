import { useState } from "react";

import PropTypes from "prop-types";

const SortComponent = ({ onSelectSort }) => {
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        onSelectSort({ status: event.target.value, gender });
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
        onSelectSort({ status, gender: event.target.value });
    };

    return (
        <>
            <div className="select-wrap">
                <div className="select">
                    <select
                        value={status}
                        onChange={handleChangeStatus}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            status
                        </option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="select">
                    <select
                        value={gender}
                        onChange={handleChangeGender}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            gender
                        </option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
        </>
    );
};

SortComponent.propTypes = {
    onSelectSort: PropTypes.func,
};

export default SortComponent;

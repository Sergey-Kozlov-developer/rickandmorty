// import { useState } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "@/redux/filter/sliceFilter";

const SortComponent = () => {
    const handleChangeStatus = (event) => {
        dispatch(setSort({ ...sort, status: event.target.value }));
    };
    const handleChangeGender = (event) => {
        dispatch(setSort({ ...sort, gender: event.target.value }));
    };

    const statusList = [
        { value: "alive", status: "Alive" },
        { value: "dead", status: "Dead" },
        { value: "unknown", status: "Unknown" },
    ];

    const genderList = [
        { value: "male", gender: "Male" },
        { value: "female", gender: "Female" },
        { value: "genderless", gender: "Genderless" },
        { value: "unknown", gender: "Unknown" },
    ];

    const { sort } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <>
            <div className="select-wrap">
                <div className="select">
                    <select
                        value={sort.status}
                        onChange={handleChangeStatus}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            status
                        </option>
                        {statusList.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.status}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="select">
                    <select
                        value={sort.gender}
                        onChange={handleChangeGender}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            gender
                        </option>
                        {genderList.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.gender}
                            </option>
                        ))}
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

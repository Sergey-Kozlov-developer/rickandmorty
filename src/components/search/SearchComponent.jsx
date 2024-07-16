// import search from "./../../assets/img/search/search.svg";

import { setSearchValue } from "@/redux/filter/sliceFilter";
import debounce from "lodash.debounce";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    // сбрасываем значение при нажатии на x
    const onClick = () => {
        dispatch(setSearchValue(""));
        setValue("");
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 400),
        []
    );
    // получаем value из input
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <>
            <form className="search-box">
                <input
                    type="text"
                    placeholder=" "
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput}
                />
                <button onClick={onClick} type="reset"></button>
            </form>
        </>
    );
};

export default SearchComponent;

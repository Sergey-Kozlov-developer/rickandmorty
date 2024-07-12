const SortComponent = () => {
    return (
        <>
            <div className="select-wrap">
                <div className="select">
                    <select>
                        <option selected disabled hidden>
                            status
                        </option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="select">
                    <select>
                        <option selected disabled hidden>
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

export default SortComponent;

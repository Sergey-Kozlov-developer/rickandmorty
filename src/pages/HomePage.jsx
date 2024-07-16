import HeroComponent from "@/components/hero/HeroComponent";
// import HomeCharacterComponent from "@/components/home/HomeCharacterComponent";
import ListCharacterComponent from "@/components/home/ListCharacterComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import SearchComponent from "@/components/search/SearchComponent";
import SortComponent from "@/components/sort/SortComponent";
import axios from "axios";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
    const [character, setCharacter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    // redux
    const { sort } = useSelector((state) => state.filter);
    // const dispatch = useDispatch();

    const fetchCharacters = (currentPage = 1) => {
        axios
            .get(
                `https://rickandmortyapi.com/api/character?page=${currentPage}&status=${sort.status}&gender=${sort.gender}`
            )
            .then((res) => {
                setCharacter(res.data.results);
                setPageCount(res.data.info.pages);
            });
    };

    useEffect(() => {
        fetchCharacters(currentPage, sort.status, sort.gender);
        window.scrollTo(0, 0);
    }, [currentPage, sort.gender, sort.status]);

    // const handleSortChange = ({ status, gender }) => {
    //     setSortValue({ status, gender });
    // };

    return (
        <>
            <HeroComponent />
            <section className="section">
                <div className="container">
                    <div className="section-sort">
                        <SearchComponent />
                        <SortComponent />
                    </div>
                    <div className="card-wrapper">
                        {character.map((element) => (
                            <div key={element.id}>
                                <ListCharacterComponent {...element} />
                            </div>
                        ))}
                    </div>
                    {/* <div className="pagination"> */}
                    <PaginationComponent
                        onChangePage={(number) => setCurrentPage(number)}
                        pageCount={pageCount}
                    />
                    {/* </div> */}
                </div>
            </section>
        </>
    );
};

export default HomePage;

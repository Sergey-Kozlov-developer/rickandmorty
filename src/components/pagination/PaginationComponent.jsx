import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import PropTypes from "prop-types";

const PaginationComponent = ({ onChangePage, pageCount }) => {
    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={Math.ceil(pageCount)}
                renderOnZeroPageCount={null}
            />
        </>
    );
};
PaginationComponent.propTypes = {
    // id: PropTypes.number,
    onChangePage: PropTypes.func,
    pageCount: PropTypes.number,
};

export default PaginationComponent;

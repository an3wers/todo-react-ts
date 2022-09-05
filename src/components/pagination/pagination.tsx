import { FC, ReactEventHandler } from "react";

interface IPaginationProps {
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  totalPage: number;
}

const Pagination: FC<IPaginationProps> = ({
  currentPage,
  prevPage,
  nextPage,
  totalPage,
}) => {

  const onPrevPage:ReactEventHandler = (e) => {
    // e.preventDefault()
    prevPage()
  }

  const onNextPage:ReactEventHandler = (e) => {
    // e.preventDefault()
    nextPage()
  }

  return (
    <nav className='py-4' aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        {/* disabled */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button disabled={currentPage === 1} className='page-link' onClick={onPrevPage}>
            Previous
          </button>
        </li>
        <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
          <button disabled={currentPage === totalPage} className='page-link' onClick={onNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

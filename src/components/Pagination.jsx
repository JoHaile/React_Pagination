import React from "react";

function Pagination({ itemsPerPage, totalItems, onPageChange }) {
  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);
  // console.log(pages);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((item, index) => (
          <li className="page-item" key={index}>
            <a
              className="page-link"
              onClick={() => onPageChange(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

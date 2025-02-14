import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState(getMovies());
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  function handleDelete(movie) {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  }

  function handlePagination(item, pageNumber, itemsPerPage) {
    const lastIndex = pageNumber * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return item.slice(firstIndex, lastIndex);
  }

  function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const newMovies = handlePagination(movies, currentPage, itemsPerPage);

  return newMovies.length === 0 ? (
    <p className="m-2">Sorry, There are no Movies in the database</p>
  ) : (
    <>
      <p className="m-2">Showing {newMovies.length} Movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newMovies.map((m) => (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate} </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(m);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        currentPage={currentPage}
        totalItems={movies.length}
      />
    </>
  );
}

export default Movies;

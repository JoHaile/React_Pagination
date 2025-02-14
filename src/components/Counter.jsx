//

function Counter({ value, id, onDelete, onIncrement, onDecrement }) {
  function getBadgeClasses() {
    let classes = "m-2 badge text-bg-";
    value === 0 ? (classes += "warning") : (classes += "primary");

    return classes;
  }

  function formatCounter() {
    return value === 0 ? "Zero" : value;
  }

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center justify-content-center">
          {id}
          <div className="col col-lg-1">
            <span className={getBadgeClasses()}>
              {value === 0 ? "Zero" : value}
            </span>
          </div>
          <div className="col col-lg-1">
            <button className="btn btn-secondary m-2" onClick={onIncrement}>
              +
            </button>
          </div>
          <div className="col col-lg-1">
            <button
              className="btn btn-secondary"
              onClick={onDecrement}
              disabled={value === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
          <div className="col col-lg-1">
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;

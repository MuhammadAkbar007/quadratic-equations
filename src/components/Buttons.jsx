const Buttons = ({ a, b, c, onCalc, onClear, disabled }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-3 offset-3">
          <button
            className="btn btn-success"
            disabled={disabled}
            onClick={() => onCalc()}
          >
            Hisoblash
          </button>
        </div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            disabled={
              typeof a === "number" ||
              typeof b === "number" ||
              typeof c === "number"
                ? false
                : true
            }
            onClick={() => onClear()}
          >
            Tozalash
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;

const Buttons = ({ a, b, c, onCalc, onClear }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-3 offset-3">
          <button
            className="btn btn-success"
            disabled={a && b && c ? false : true}
            onClick={() => onCalc()}
          >
            Hisoblash
          </button>
        </div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            disabled={a || b || c ? false : true}
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

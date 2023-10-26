const Result = ({ a, b, c, x1, x2, disc }) => {
  return (
    <>
      {x1 && x2 ? (
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-dark">
                <h2 className="text-white">Javobi:</h2>
              </div>
              <div className="card-body">
                <h3>
                  X <sub>1</sub> = {x1}
                </h3>
                <h3>
                  X <sub>2</sub> = {x2}
                </h3>
              </div>
            </div>
          </div>
          <h1>
            <br />
            <span className="text-danger">Diskriminant</span> (D) ={" "}
            <span className="text-warning">
              b<sup>2</sup> - 4ac
            </span>{" "}
            = {b}
            <sup>2</sup> - 4 * {a} * {c} = {disc}
          </h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Result;

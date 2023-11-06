const Roots = ({ disc, x1, x2, a, b, c }) => {
  let tempA = a < 0 ? `(${a})` : `${a}`;
  let tempC = c < 0 ? `(${c})` : `${c}`;

  return (
    <div>
      {disc < 0 ? (
        <div>
          <h2>
            Diskriminant ={" "}
            <span className="text-warning">
              b<sup>2</sup> - 4ac
            </span>{" "}
            = {b}
            <sup>2</sup> - 4 * {tempA} * {tempC} = {disc}
          </h2>
          <h1 className="text-danger">
            ⊘ Kvadrat tenglama yechimga ega emas ⊘
          </h1>
        </div>
      ) : (
        <div>
          <h1>
            {disc === 0 ? (
              <div>
                X<sub>1</sub> = X<sub>2</sub> = {x1}{" "}
                <h3 className="text-secondary">(bitta ildiz)</h3>{" "}
              </div>
            ) : (
              <div>
                X<sub>1</sub> = {x1}; X<sub>2</sub> = {x2}
                <h3 className="text-secondary">(ikkita ildiz)</h3>
              </div>
            )}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Roots;

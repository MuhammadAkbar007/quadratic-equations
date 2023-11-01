const Roots = ({ disc, x1, x2 }) => {
  return (
    <div>
      {disc < 0 ? (
        <h1 className="text-danger">Kvadrat tenglama yechimga ega emas</h1>
      ) : (
        <div>
          <h1>
            {disc === 0 ? (
              <div>
                X<sub>1</sub> = X<sub>2</sub> = {x1}{" "}
                <h3 className="text-secondary">(bitta oldiz)</h3>{" "}
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

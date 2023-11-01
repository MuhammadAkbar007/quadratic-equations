const Multipliers = ({ disc, x1, x2 }) => {
  x1 = x1 * -1;
  x2 = x2 * -1;
  let temp1 = x1 > 0 ? ` + ${x1}` : x1;
  let temp2 = x2 > 0 ? ` + ${x2}` : x2;

  return (
    <div>
      {disc === 0 ? (
        <h2>
          f(x) = (x {temp1})<sup>2</sup>
        </h2>
      ) : (
        <h2>
          {" "}
          f(x) = (x {temp1})(x {temp2})
        </h2>
      )}
    </div>
  );
};

export default Multipliers;

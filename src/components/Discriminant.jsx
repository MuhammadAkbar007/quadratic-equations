const Discriminant = ({ a, b, c, disc }) => {
  let tempA = a < 0 ? `(${a})` : `${a}`;
  let tempC = c < 0 ? `(${c})` : `${c}`;

  return (
    <div>
      <h2>
        <span className="text-danger">Diskriminant</span> (D) ={" "}
        <span className="text-warning">
          b<sup>2</sup> - 4ac
        </span>{" "}
        = {b}
        <sup>2</sup> - 4 * {tempA} * {tempC} = {disc}
      </h2>
    </div>
  );
};

export default Discriminant;

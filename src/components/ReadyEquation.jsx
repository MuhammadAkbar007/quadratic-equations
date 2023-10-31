const ReadyEquation = ({ a, b, c }) => {
  let strA = "";

  if (a === -1) strA = "-";

  return (
    <div>
      <h1>
        {a === -1 || a === 1 ? strA : a}x<sup>2</sup>
        {b > 0 ? " + " : ""}
        {b === 1 || b === 0 ? "" : b === -1 ? " - " : b}
        {b === 0 ? "" : "x"}
        {c > 0 ? " + " : ""}
        {c === 0 ? "" : c} = 0
      </h1>
    </div>
  );
};

export default ReadyEquation;

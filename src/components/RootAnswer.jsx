const RootAnswer = ({ val, sep, a, b, disc }) => {
  console.log(b);
  let tempB = b > 0 ? `-${b}` : `${b}`;
  if (val) {
    return (
      <h2>
        x<sub>1</sub> = x<sub>2</sub> ={" "}
        <span className="text-warning">-b / (2 * a)</span> = {tempB}
      </h2>
    );
  } else {
    return (
      <div>
        {sep === 1 ? (
          <h2>
            x<sub>1</sub> =
          </h2>
        ) : (
          <h2>
            x<sub>2</sub> ={" "}
          </h2>
        )}
      </div>
    );
  }
};

export default RootAnswer;

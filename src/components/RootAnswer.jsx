const RootAnswer = ({ val, sep, a, b, disc, x1, x2 }) => {
  let tempB = b > 0 ? `-${b}` : `${b}`;
  let tempA = a < 0 ? `-${a}` : `${a}`;
  if (val) {
    return (
      <h2>
        x<sub>1</sub> = x<sub>2</sub> ={" "}
        <span className="text-warning">-b / (2 * a)</span> = {tempB} / (2 *{" "}
        {tempA}) = {x1}
      </h2>
    );
  } else {
    return (
      <div>
        {sep === 1 ? (
          <h2>
            x<sub>1</sub> ={" "}
            <span className="text-warning">
              (-b +{" "}
              <math>
                <msqrt>
                  <mi>D</mi>
                </msqrt>
              </math>
              ) / (2 * a)
            </span>{" "}
            = ({b * -1} +{" "}
            <math>
              <msqrt>
                <mi>{disc}</mi>
              </msqrt>
            </math>
            ) / (2 * {tempA}) = {x1}
          </h2>
        ) : (
          <h2>
            x<sub>2</sub> ={" "}
            <span className="text-warning">
              (-b -{" "}
              <math>
                <msqrt>
                  <mi>D</mi>
                </msqrt>
              </math>{" "}
              / (2 * a)
            </span>{" "}
            = ({b * -1} -{" "}
            <math>
              <msqrt>
                <mi>{disc}</mi>
              </msqrt>
            </math>
            ) / (2 * {tempA}) = {x2}
          </h2>
        )}
      </div>
    );
  }
};

export default RootAnswer;

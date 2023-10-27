import { useState } from "react";
import Buttons from "./Buttons";
import Result from "./Result";

const Input = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [disc, setDisc] = useState(0);

  const onClear = () => {
    setA(0);
    setB(0);
    setC(0);
  };

  const onCalc = () => {
    let temp0 = b * b - 4 * a * c;
    let temp1 = (-b + Math.sqrt(temp0)) / (2 * a);
    let temp2 = (-b - Math.sqrt(temp0)) / (2 * a);
    setDisc(temp0);
    setX1(temp1);
    setX2(temp2);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="a"
                onChange={(e) => setA(Number(e.target.value))}
              />
            </div>
            <div className="col-2">
              <h1>
                {" "}
                x<sup>2</sup> &nbsp;+{" "}
              </h1>
            </div>
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="b"
                onChange={(e) => setB(Number(e.target.value))}
              />
            </div>
            <div className="col-2">
              <h1>x&nbsp; +</h1>
            </div>
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="c"
                onChange={(e) => setC(Number(e.target.value))}
              />
            </div>
            <div className="col-2">
              <h1>=&nbsp;&nbsp;0</h1>
            </div>
          </div>
        </div>
      </div>

      <Buttons a={a} b={b} c={c} onCalc={() => onCalc()} onClear={onClear} />

      <Result a={a} b={b} c={c} x1={x1} x2={x2} disc={disc} />
    </>
  );
};

export default Input;

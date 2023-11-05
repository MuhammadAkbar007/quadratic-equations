import { useState } from "react";
import ReadyEquation from "./ReadyEquation";
import Roots from "./Roots";
import Multipliers from "./Multipliers";
import Discriminant from "./Discriminant";
import RootAnswer from "./RootAnswer";

const Inputs = () => {
  const [a, setA] = useState(1);
  const [aDisabled, setADisabled] = useState(true);
  const [b, setB] = useState(1);
  const [bDisabled, setBDisabled] = useState(true);
  const [c, setC] = useState(0);
  const [cDisabled, setCDisabled] = useState(true);
  const [x2, setX2] = useState(0);
  const [x1, setX1] = useState(0);
  const [disc, setDisc] = useState(0);
  const [continued, setContinued] = useState(false);

  const handler = () => {
    let temp0 = b * b - 4 * a * c;
    let temp1 = (-b + Math.sqrt(temp0)) / (2 * a);
    let temp2 = (-b - Math.sqrt(temp0)) / (2 * a);
    setDisc(temp0);
    setX1(temp1);
    setX2(temp2);

    setContinued(true);
  };

  const coefSetter = (val, coef) => {
    switch (coef) {
      case "a":
        if (Number.isInteger(val) && val !== 0) {
          setA(val);
          setADisabled(false);
        }
        break;
      case "b":
        if (Number.isInteger(val)) {
          setB(val);
          setBDisabled(false);
        }
        break;
      case "c":
        if (Number.isInteger(val)) {
          setC(val);
          setCDisabled(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="a"
                onChange={(e) => coefSetter(Number(e.target.value), "a")}
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
                onChange={(e) => coefSetter(Number(e.target.value), "b")}
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
                onChange={(e) => coefSetter(Number(e.target.value), "c")}
              />
            </div>
            <div className="col-2">
              <h1>=&nbsp;&nbsp;0</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <button
            className="btn btn-success"
            disabled={aDisabled || bDisabled || cDisabled}
            onClick={handler}
          >
            Hisoblash
          </button>
        </div>
      </div>

      {continued ? (
        <div className="row my-3">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <ReadyEquation a={a} b={b} c={c} />
              </div>
              <div className="card-body">
                <Roots disc={disc} x1={x1} x2={x2} />
                {disc >= 0 ? (
                  <div>
                    <Multipliers disc={disc} x1={x1} x2={x2} />
                    <h2>Ildizlar yig&apos;indisi (-b/a) = {x1 + x2}</h2>
                    <h2>Ildizlar ko&apos;paytmasi (c/a) = {x1 * x2}</h2>
                    <Discriminant a={a} b={b} c={c} disc={disc} />
                    {disc === 0 ? (
                      <RootAnswer val={"oneAnswer"} a={a} b={b} x1={x1} />
                    ) : (
                      <div>
                        <RootAnswer
                          sep={1}
                          a={a}
                          b={b}
                          disc={disc}
                          x1={x1}
                          x2={x2}
                        />
                        <RootAnswer
                          sep={2}
                          a={a}
                          b={b}
                          disc={disc}
                          x1={x1}
                          x2={x2}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Inputs;

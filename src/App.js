import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  return (
    <div className="container text-center">
      <h1 className="mt-3">
        Kvadrat tenglamalarni <span className="text-danger">Diskriminant</span>{" "}
        usulda hisoblash
      </h1>
      <h4 className="mt-2 text-secondary">
        Biz sizga{" "}
        <span className="text-warning">
          "ax<sup>2</sup> + bx + c = 0"
        </span>{" "}
        ko'rinishidagi tenglamani yechishga yordam beramiz. <br /> Quyida a, b
        va c qiymatlarini kiritish kifoya:
      </h4>

      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="a"
                // defaultValue={a}
                value={a}
              />
            </div>
            <div className="col-2">
              <h1>
                x<sup>2</sup> +
              </h1>
            </div>
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="b"
              />
            </div>
            <div className="col-2">
              <h1>x +</h1>
            </div>
            <div className="col-2">
              <input
                type="number"
                className="form-control coef"
                placeholder="c"
              />
            </div>
            <div className="col-2">
              <h1>=0</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-3 offset-3">
          <button className="btn btn-success">Hisoblash</button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger">Tozalash</button>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const onClear = () => {
    setA(0);
    setB(0);
    setC(0);
  };

  return (
    <div className="container text-center">
      
      <h1 className="mt-3">
        Kvadrat tenglamalarni <span className="text-danger">Diskriminant</span> {" "} usulda hisoblash
      </h1>
      
      <h4 className="mt-2 text-secondary">
        Biz sizga{" "} <span className="text-warning"> &nbsp;&nbsp;ax<sup>2</sup> + bx + c = 0 &nbsp;</span>
        {" "} ko'rinishidagi tenglamani yechishga yordam beramiz. <br /> Quyida a, b va c qiymatlarini kiritish kifoya:
      </h4>

      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div className="col-2">
              <input type="number" className="form-control coef" placeholder="a" value={a ? a : "a"}
              onChange={(e) => setA(e.target.value)} />
            </div>
            <div className="col-2">
              <h1> x<sup>2</sup> &nbsp;+ </h1>
            </div>
            <div className="col-2">
              <input type="number" className="form-control coef" placeholder="b" value={b ? b : "b"} 
              onChange={(e) => setB(e.target.value)} />
            </div>
            <div className="col-2">
              <h1>x&nbsp; +</h1>
            </div>
            <div className="col-2">
              <input type="number" className="form-control coef" placeholder="c" value={c ? c : "c"}
                onChange={(e) => setC(e.target.value)} />
            </div>
            <div className="col-2">
              <h1>=&nbsp;&nbsp;0</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-3 offset-3">
          <button
            className="btn btn-success"
            disabled={a && b && c ? false : true}
          >
            Hisoblash
          </button>
        </div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            disabled={a && b && c ? false : true}
            onClick={() => onClear()}
          >
            Tozalash
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

import NoAnswer from "./NoAnswer";
import OneAnswer from "./OneAnswer";
import TwoAnswers from "./TwoAnswers";

const Result = ({ a, b, c, x1, x2, disc }) => {
  if (disc < 0) {
    return <NoAnswer a={a} b={c} c={c} />;
  } else if (disc === 0) {
    return <OneAnswer />;
  } else if (disc > 0) {
    return <TwoAnswers />;
  }
};

export default Result;

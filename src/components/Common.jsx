const Common = ({ a, b, c }) => {
  return (
    <div>
      <h1>
        Kiritilgan funksiya: &nbsp;
        {a === 1 ? "" : a}x<sup>2</sup>
        {b > 0 ? " +" : ""} {b === 1 ? "" : b}x {c > 0 ? "+ " : ""}
        {c !== 0 ? c : ""} = 0
      </h1>
    </div>
  );
};

export default Common;

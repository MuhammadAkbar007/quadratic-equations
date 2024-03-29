const Header = () => {
  return (
    <div>
      <h1 className="mt-3">
        Kvadrat tenglamalarni{" "}
        <span className="bold text-danger">Diskriminant</span> usulda hisoblash
      </h1>

      <h4 className="mt-2 text-secondary">
        Biz sizga{" "}
        <span className="text-warning bold">
          {" "}
          &nbsp;&nbsp;ax<sup>2</sup> + bx + c = 0 &nbsp;
        </span>{" "}
        ko&apos;rinishidagi tenglamani yechishga yordam beramiz. <br /> Quyida
        a, b va c qiymatlarini kiritish kifoya:
      </h4>
    </div>
  );
};

export default Header;

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">Міністерство у справах ветеранів України</div>
        <h1>е-Ветеран</h1>
        <form action="">
          <input type="text" placeholder="Назва статусу або пільги" />
        </form>
      </div>
    </header>
  );
};

export default Header;

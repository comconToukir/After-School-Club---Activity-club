import './Header.css'
const Header = () => {
  return (
    <header className="flex items-center gap-5 py-4 w-5/6 mx-auto">
        <img className="w-12" src="favicon.ico" alt="" />
        <h1 className="text-3xl text-title-clr font-bold font-slabo tracking-wider">AFTER SCHOOL CLUB</h1>
    </header>
  );
};

export default Header;
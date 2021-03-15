// components/NavBar.js
import Link from "next/link";
import Hint from "../pages/autocomplete.js"

  
  const NavBar = () => (
    <nav>
      
      <div className="top__nav">
      <Link href="/">
          <a> <img src="/images/logo.jpg" alt="Museums of India Logo" /></a>
        </Link>
       
       <Hint/>
      </div>
      <div className="navigation">
        <div className="menu__nav">
        <Link href="/people">
            <a>People</a>
          </Link> 

          <a className="nav-link" href="https://www.museumsofindia.org/">Home</a>
          <a className="nav-link" href="https://www.museumsofindia.org/citywise.php?cityid=80">Places</a>
          <a className="nav-link" href="https://www.museumsofindia.org/categorywise.php?categoryid=110">Categories</a>
          <a className="nav-link" href="https://www.museumsofindia.org/writers-corner.php">Articles</a>
          <a className="nav-link" href="https://www.museumsofindia.org/experiences.php">Experiences</a>
          <a className="nav-link imd" href="https://www.museumsofindia.org/imd2020.php">IMD 2020</a>

        </div>
      </div>
      </nav>
      

      
      
  );
  
  export default NavBar;
  
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="top_title">
          <div>Movies Point</div>
        </div>
        <div className="navigate">
          <ul className="list">
            <li>
              <Link to="/" className="lnk">
                Trending
              </Link>
            </li>
            <li>
              <Link to="/movies" className="lnk">
                Movies
              </Link>
            </li>
            {/* <li>
              <Link to="/shows" className="lnk">
                TV Shows
              </Link>
            </li> */}
            <li>
              <Link to="/browse" className="lnk">
                Browse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

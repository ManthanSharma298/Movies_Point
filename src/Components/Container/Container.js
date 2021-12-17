import './Container.css';
import { useNavigate } from 'react-router-dom';
import Info from '../../Pages/Info/Info';
import { Link } from 'react-router-dom';

function Container({ obj }) {
  const img_300 = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <div className="media">
        <img className="poster" src={`${img_300}${obj.poster_path}`} />
        <div className="title">{obj.title || obj.name}</div>
        <div className="content">
          <div>{obj.release_date || obj.first_air_date}</div>
          <div id="rating">{obj.vote_average}</div>
        </div>
        <Link to={`/${obj.id}`}>
          <div className="btn_cont">
            <button className="btn">View Details</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Container;

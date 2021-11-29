import './Container.css';
import { useNavigate } from 'react-router-dom';
import Info from '../../Pages/Info/Info';

function Container({ obj }) {
  const img_300 = 'https://image.tmdb.org/t/p/w300';

  const navigate = useNavigate(); //VERY IMP as it needs to be outside of the eventHandler
  function OnClickHandler() {
    navigate(`info/${obj.id}`);
  }

  return (
    <>
      <div className="media">
        <img className="poster" src={`${img_300}${obj.poster_path}`} />
        <div className="title">{obj.title || obj.name}</div>
        <div className="content">
          <div>{obj.release_date || obj.first_air_date}</div>
          <div id="rating">{obj.vote_average}</div>
        </div>
        <div className="btn_cont">
          <button className="btn" onClick={OnClickHandler}>
            View Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Container;

import axios from 'axios';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import '../tiles.css';

const Shows = () => {
  const [dataArr, setDataArr] = useState([]);
  async function getData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
      `
    );
    console.log(res);
    setDataArr(res.data.results);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="subTitle">TV Shows</div>
      <div className="home">
        {dataArr &&
          dataArr.map((e) => {
            return <Container key={e.id} obj={e} />;
          })}
      </div>
    </>
  );
};

export default Shows;

import axios from 'axios';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import PageNo from '../../Components/PageNo.js/PageNo';
import '../tiles.css';

const Movies = () => {
  const [dataArr, setDataArr] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [page, setPage] = useState(1);
  async function getData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    // console.log(res.data.results);
    setDataArr(res.data.results);
    setNumOfPages(res.data.total_pages);
  }
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className="subTitle">Movies</div>
      <div className="home">
        {dataArr &&
          dataArr.map((e) => {
            return <Container key={e.id} obj={e} />;
          })}
      </div>
      <PageNo setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};

export default Movies;

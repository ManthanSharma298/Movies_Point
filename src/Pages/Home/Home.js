import axios from 'axios';
import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';
import '../tiles.css';
import PageNo from '../../Components/PageNo.js/PageNo';

const Home = () => {
  const [dataArr, setDataArr] = useState([]);
  const [page, setPage] = useState(1);
  async function getData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&page=${page}`
    );
    // console.log(res.data);
    setDataArr(res.data.results);
  }

  useEffect(() => {
    getData();
  }, [page]);

  const numOfPages = 10;
  return (
    <>
      <span className="subTitle">Trending</span>
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

export default Home;

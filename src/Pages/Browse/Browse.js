import { TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Container from '../../Components/Container/Container';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import axios from 'axios';
import PageNo from '../../Components/PageNo.js/PageNo';
import { useState, useEffect } from 'react';

const Browse = () => {
  const newTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#6ac045',
      },
    },
  });

  const [dataArr, setDataArr] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState('movie');
  const [numOfPages, setNumOfPages] = useState(0);
  const [page, setPage] = useState(1);

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#6ac045' },
    },
  });

  const getSeachedData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${value}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    // console.log(res.data);
    setDataArr(res.data.results);
    setNumOfPages(res.data.total_pages);
  };
  useEffect(() => {
    getSeachedData();
  }, [page]);

  return (
    <>
      <ThemeProvider theme={newTheme}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#171717',
          }}
        >
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <div>
            <RadioGroup
              aria-label="genre"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <FormControlLabel
                color="secondary"
                value="movie"
                control={<Radio color="primary" />}
                label="Movies"
              />
              <FormControlLabel
                value="tv"
                control={<Radio color="primary" />}
                label="TV Shows"
              />
            </RadioGroup>
          </div> */}
          <Button color="primary" variant="contained" onClick={getSeachedData}>
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
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

export default Browse;

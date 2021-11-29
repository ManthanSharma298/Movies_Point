import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './Info.css';

const Info = () => {
  const { id } = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState(null);

  async function getData() {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&append_to_response=videos`
    );
    console.log(data);
    setContent(data);
    setVideo(data.videos.results[0]?.key);
  }

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const btnTheme = createMuiTheme({
    palette: {
      primary: { main: '#6ac045' },
    },
  });
  return (
    <>
      {content && (
        <div className="view">
          <img src={`https://image.tmdb.org/t/p/w300/${content.poster_path}`} />
          <div className="cont">
            <h1>{content.original_title}</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '4%',
              }}
            >
              {content.genres.map((e) => {
                return (
                  <div className="genre" key={e.id}>
                    {e.name}/
                  </div>
                );
              })}
            </div>
            <div className="overview">{content.overview}</div>
            <div className="tbtn">
              <ThemeProvider theme={btnTheme}>
                <Button
                  variant="contained"
                  color="primary"
                  href={`https://www.youtube.com/watch?v=${video}`}
                >
                  Play Trailer
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;

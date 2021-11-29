import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Shows from './Pages/Shows/Shows';
import Info from './Pages/Info/Info';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            {/* <Route path="/shows" element={<Shows />} /> */}
            <Route path="/browse" element={<Browse />} />
            <Route path="/movies/info/:id" element={<Info />} />
            <Route path="/info/:id" element={<Info />} />
            {/* <Route path="shows/info/:id" element={<Info />} /> */}
            <Route path="/browse/info/:id" element={<Info />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

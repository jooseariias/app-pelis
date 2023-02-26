import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import TvList from './pages/TvDetails/TvDetails';
import TvDetails from './pages/TvDetails/TvDetails';
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="Tv/:id" element={<TvDetails />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="Tv/:type" element={<TvList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

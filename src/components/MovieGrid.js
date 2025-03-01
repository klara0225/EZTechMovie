import { Link } from 'react-router-dom';
import './Moviegrid.css';

const movies = [{name: "The Monkey", price: 15}, {name: "Heart Eyes", price: 10}, {name: "Captain America", price: 20}, {name: "Scary Movie 6", price: 10}, {name: "Far Behind", price: 5}]

function MovieGrid() {
  return (
    <div>
      <h1>Welcome to EZTech Movie</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${index + 1}`}>
            <div className="movie">{movie.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;

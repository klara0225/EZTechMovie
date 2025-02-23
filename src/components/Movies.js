import { useState } from 'react';

function Movies(){
    const [movies, setMovies] = useState([]);
    const [movieInput, setMovieInput] = useState({
        title: '',
        director: '',
        year: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovieInput(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movieInput.title) return;

        setMovies(prev => [...prev, { ...movieInput, id: Date.now() }]);
        setMovieInput({
            title: '',
            director: '',
            year: ''
        });

    }

    return (
    <div className="movies-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movieInput.title}
          onChange={handleInputChange}
          placeholder="Movie title"
        />
        <input
          type="text"
          name="director"
          value={movieInput.director}
          onChange={handleInputChange}
          placeholder="Director"
        />
        <input
          type="number"
          name="year"
          value={movieInput.year}
          onChange={handleInputChange}
          placeholder="Release year"
        />
        <button type="submit">Add Movie</button>
      </form>

      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
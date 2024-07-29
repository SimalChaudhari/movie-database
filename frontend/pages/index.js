import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get('/api/movies');
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <Link href="/create">Add New Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <Link href={`/edit/${movie._id}`}>
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

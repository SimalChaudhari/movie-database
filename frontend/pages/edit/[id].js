import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditMovie = () => {
  const [title, setTitle] = useState('');
  const [publishingYear, setPublishingYear] = useState('');
  const [poster, setPoster] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        const res = await axios.get(`/api/movies/${id}`);
        const { title, publishingYear, poster } = res.data;
        setTitle(title);
        setPublishingYear(publishingYear);
        setPoster(poster);
      }
    };
    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/movies/${id}`, { title, publishingYear, poster });
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Publishing Year"
          value={publishingYear}
          onChange={(e) => setPublishingYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;

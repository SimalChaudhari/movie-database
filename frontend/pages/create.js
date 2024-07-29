import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [publishingYear, setPublishingYear] = useState('');
  const [poster, setPoster] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/movies', { title, publishingYear, poster });
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add New Movie</h1>
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
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default CreateMovie;

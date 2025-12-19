const express = require('express');
const app = express();
const PORT = 1717;

app.use(express.json());

const data = [
  { id: 1, name: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", published: 2010, rating: 8.8 },
  { id: 2, name: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", genre: "Sci-Fi", published: 1999, rating: 8.7 },
  { id: 3, name: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", published: 2014, rating: 8.6 },
  { id: 4, name: "The Shawshank Redemption", director: "Frank Darabont", genre: "Drama", published: 1994, rating: 9.3 },
  { id: 5, name: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", published: 1994, rating: 8.9 },
  { id: 6, name: "The Dark Knight", director: "Christopher Nolan", genre: "Action", published: 2008, rating: 9.0 },
  { id: 7, name: "Fight Club", director: "David Fincher", genre: "Drama", published: 1999, rating: 8.8 }
];

app.get('/movies', (req, res) => {
  const { id } = req.query;

  if(id && id <= 7){
    const result = data.filter(el => el.id == id.trim());
    return res.json({ movie: result});
  }
  
  res.json({ movies: data });
})

app.post('/movies', (req, res) => {
  let newMovie = req.body;
  newMovie = {...newMovie, id: data.length + 1}
  res.json({ movieAdded: newMovie });
})

app.delete('/movies', (req, res) => {
  const { id } = req.query;
  const movie = data.find(el => el.id == id);

  if(!movie) return res.status(404).json({ error: "Movie not Found!" });

  const updatedMovies = data.filter(el => el.id !== id);
  data.length = 0;
  data.push(...updatedMovies);

  res.json({ message: "Movie removed", removedMovie: movie })
})

app.get('/moviesFilter', (req, res) => {
  const { sort } = req.query;

  if(!sort) return res.json({ movies: data });

  const s = sort.toLowerCase();

  if(s == 'min'){
    const sortedMovies = [...data].sort((a, b) => a.rating - b.rating);
    return res.json({ sortedBy: 'min', movies: sortedMovies });
  }
  if(s == 'max'){
    const sortedMovies = [...data].sort((a, b) => b.rating - a.rating);
    return res.json({ sortedBy: 'max', movies: sortedMovies });
  }

  res.status(400).json({ error: 'Invalid sort type, use min or max' });
})

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));


// For POST
// {"name": "Harry Potter and the Sorcerer's Stone", "director": "Chris Columbus", "genre": "Fantasy", "published": 2001, "rating": 7.6};
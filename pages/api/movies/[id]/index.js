import TheMovieDatabaseApi from '../../../../lib/the-movie-database';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const movie = await TheMovieDatabaseApi.getMovieById(id);
    res.json(movie);
  } catch (err) {
    res.json(err);
  }
}
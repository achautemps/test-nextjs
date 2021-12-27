import TheMovieDatabaseApi from '../../../lib/the-movie-database-api';

export default async function handler(req, res) {
  try {
    const movies = await TheMovieDatabaseApi.getAll(req.query.page);
    res.json(movies);
  } catch (err) {
    res.json(err);
  }
}

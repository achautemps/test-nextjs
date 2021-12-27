import TheMovieDatabaseApi from '../../../../lib/the-movie-database';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const moviePromise = await TheMovieDatabaseApi.getMovieById(id);
    const actorsPromise = TheMovieDatabaseApi.getActorsForMovie(id);

    const [movie, actors] = await Promise.all([moviePromise, actorsPromise]);

    res.json({
      movie,
      actors,
    });
  } catch (err) {
    res.json(err);
  }
}

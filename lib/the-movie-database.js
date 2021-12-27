import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 5000,
  params: {
    language: 'fr',
    api_key: process.env.THE_MOVIE_DB_API_KEY,
  },
});

class TheMovieDataBase {
  async getAll(page) {
    return client
      .get('/movie/popular', {
        params: {
          page,
        },
      })
      .then(({ data }) => data);
  }

  async getMovieById(id) {
    return client.get(`/movie/${id}`).then(({ data }) => data);
  }

  async getActorsForMovie(id) {
    return client.get(`/movie/${id}/credits`).then(({ data }) => data);
  }

  async getGuestSession() {
    return client
      .get('/authentication/guest_session/new')
      .then(({ data }) => data.guest_session_id);
  }

  async movieRating(id, value, guest_session_id) {
    return client
      .post(`/movie/${id}/rating`, null, {
        params: { value, guest_session_id },
      })
      .then(({ data }) => data);
  }
}

export default Object.freeze(new TheMovieDataBase());

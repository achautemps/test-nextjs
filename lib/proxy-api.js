import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  timeout: 5000,
});

class Api {
  async getAll(page = 1) {
    return client
      .get('movies', {
        params: {
          page,
        },
      })
      .then(({ data }) => data);
  }

  async getMovieDetails(id) {
    return client.get(`movies/${id}`).then(({ data }) => data);
  }
}

export default Object.freeze(new Api());

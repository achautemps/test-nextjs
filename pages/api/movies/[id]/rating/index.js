import { withIronSessionApiRoute } from 'iron-session/next';
import theMovieDatabase from '../../../../../lib/the-movie-database-api';

const sessionOptions = {
  cookieName: 'session',
  password: process.env.COOKIE_PASSWORD,
  cookieOptions: {
    maxAge: undefined, // Pour supprimer le cookie quand l'utilisateur ferme le navigateur
    secure: process.env.NODE_ENV === 'production',
  },
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    return {
      notFound: true,
    };
  }

  try {
    if (!req.session.guestSession) {
      req.session.guestSession = await theMovieDatabase.getGuestSession();
      await req.session.save();
    }

    const result = await theMovieDatabase.movieRating(
      req.query.id,
      req.body.rating,
      req.session.guestSession
    );

    res.json(result);
  } catch (error) {
    res.json(error);
  }
}
export default withIronSessionApiRoute(handler, sessionOptions);

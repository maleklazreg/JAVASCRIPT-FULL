// Assuming this is in `server/routes/tv.routes.js`
import tvController from '../controllers/Tv.controller.js'; // Adjusted path to match case
import { Router } from 'express';

const router = Router();

// Routes for /api/tvshows
router.route('/')
  .get(tvController.getAllShows)  // GET all TV shows
  .post(tvController.addShow);    // POST a new TV show

// Route for filtering by year
router.route('/year/:year')
  .get(tvController.getShowsByYear); // GET shows by year

// Routes for manipulating a specific show by title
router.route('/title/:title')
  .delete(tvController.deleteShowByTitle) // DELETE a show by title
  .patch(tvController.updateStarring);    // PATCH starring cast by title

export default router;
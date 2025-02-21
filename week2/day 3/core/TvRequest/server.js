import tvController from '../controllers/tv.controller.js';
import { Router } from 'express';

const router = Router();

router.route('/')
    .post(tvController.addShow)
    .get(tvController.getAllShows);



router.route('/year/:year')
    .get(tvController.getShowsByYear);

router.route('/title/:title')
    .delete(tvController.deleteShowByTitle)
    .patch(tvController.updateStarring);

export default router;
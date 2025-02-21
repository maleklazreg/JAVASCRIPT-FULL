// Assuming this is in a file like `server/controllers/tv.controller.js`
import tvShows from '../models/Tv.models.js'; // Updated path to match your previous structure

const tvController = {
  // GET all shows - unchanged, just adding a success status
  getAllShows: (req, res) => {
    res.status(200).json(tvShows);
  },

  // GET shows by year - add error handling for no matches
  getShowsByYear: (req, res) => {
    const year = parseInt(req.params.year);
    if (isNaN(year)) {
      return res.status(400).json({ message: 'Year must be a valid number' });
    }
    const showsByYear = tvShows.filter((show) => show.yearCreated === year);
    if (showsByYear.length === 0) {
      return res.status(404).json({ message: `No TV shows found for year ${year}` });
    }
    res.status(200).json(showsByYear);
  },

  // DELETE show by title - add case-insensitive matching and error handling
  deleteShowByTitle: (req, res) => {
    const title = req.params.title.trim(); // Clean up input
    const index = tvShows.findIndex(
      (show) => show.tvShow.toLowerCase() === title.toLowerCase()
    );
    if (index === -1) {
      return res.status(404).json({ message: `TV show '${title}' not found` });
    }
    tvShows.splice(index, 1);
    res.status(200).json({ message: `Deleted '${title}'`, tvShows });
  },

  // PATCH starring - add validation and cleaner response
  updateStarring: (req, res) => {
    const title = req.params.title.trim();
    const { starring } = req.body;

    // Validate input
    if (!starring || !Array.isArray(starring)) {
      return res.status(400).json({ message: 'Starring must be a non-empty array' });
    }

    const show = tvShows.find(
      (show) => show.tvShow.toLowerCase() === title.toLowerCase()
    );
    if (!show) {
      return res.status(404).json({ message: `TV show '${title}' not found` });
    }

    show.starring = starring; // Update the starring array
    res.status(200).json({ message: `Updated starring for '${title}'`, show });
  },

  // POST new show - add basic validation
  addShow: (req, res) => {
    const { tvShow, yearCreated, genre, starring } = req.body;

    // Validate required fields
    if (!tvShow || !yearCreated || !genre || !Array.isArray(starring)) {
      return res.status(400).json({
        message: 'Missing or invalid fields: tvShow, yearCreated, genre, and starring (array) are required',
      });
    }

    const newShow = {
      tvShow: tvShow.trim(),
      yearCreated: parseInt(yearCreated),
      genre: genre.trim(),
      starring,
    };
    tvShows.push(newShow);
    res.status(201).json({ message: `Added '${tvShow}'`, show: newShow });
  },
};

export default tvController;
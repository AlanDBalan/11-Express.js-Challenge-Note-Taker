// Require express and router
const router = require('express').Router();
const store = require('../db/store');
const { route } = require('./htmlRoutes');

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    store
        .addNotes(req.body)
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    store
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
}
);

router.put('/notes/:id', (req, res) => {
    store
        .updateNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
}
);

module.exports = router;

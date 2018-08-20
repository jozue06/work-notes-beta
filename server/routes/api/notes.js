import express from 'express';
import Note from '../../models/note.js'

const router = express.Router()

router.get('/api/notes', (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
});

router.post('/api/notes', (req, res) => {
    const newNote = new Note({
        name: req.body.name,
        content: req.body.content,
        id: req.body.id,
        timestamp: req.body.timestamp
    });
    newNote.save()
        .then(note => res.json(note));

});

router.delete('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => note.remove()
            .then(() => res.json({
                deleted: true
            }))
        )
        .catch(err => res.status(404).json({deleted: false}));
})

export default router;
import express from 'express';
import User from '../../models/user.js'

const router = express.Router()

router.get('/', (req, res) => {
    User.find()
        .populate('notes')
        .exec()
        .then(notes => res.send(notes))
});

router.post('/', (req, res) => {
    
    const newNote = new Note({
        name: req.body.name,
        content: req.body.content,
        id: req.body.id,
        timeStamp: req.body.timeStamp
    });
    console.log('newNote ', newNote)
    newNote.save()
        .then(note => res.json(note));

});

router.delete('/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => note.remove()
            .then(() => res.json({
                deleted: true
            }))
        )
        .catch(err => res.status(404).json({deleted: false}));
})

router.put('/:id', (req, res) => {
    console.log('putted')
    let noteObj = {
        name: req.body.name,
        content: req.body.content
    }
Note.findByIdAndUpdate(req.params.id, noteObj, {new:true})
.then(note => res.json({
    updated: true,
    note
}))
})

export default router;
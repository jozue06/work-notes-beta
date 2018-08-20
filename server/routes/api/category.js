import express from 'express';
import Category from '../../models/Category.js'

const router = express.Router()

router.get('/', (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
});

router.post('/', (req, res) => {
    const newCategory = new Category({
        name: req.body.name,
        budget: req.body.budget,
        id: req.body.id,
        timestamp: req.body.timestamp
    });
    newCategory.save()
        .then(category => res.json(category));

});

router.delete('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(category => category.remove()
            .then(() => res.json({
                deleted: true
            }))
        )
        .catch(err => res.status(404).json({deleted: false}));
})

export default router;
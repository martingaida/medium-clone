const express = require('express');
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const { Story } = require('../../db/models');
const csrf = require('csurf');
const { response } = require('express');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();

// Fetch all stories
router.get('/', 
    csrfProtection,
    asyncHandler(async (req, res) => {
        const stories = await Story.findAll({
            include: ['Comments', 'Likes', 'User'],
            order: [['createdAt', 'DESC']]
        });
        return res.json({ stories })
    })
);

// Fetch a story
router.get('/:id(\\d+)',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const { id } = req.params
        const story = await Story.findByPk(id, {
            include: ['Comments', 'Likes', 'User']
        });
        return res.json({ story })
    })
);

// Create a story
router.post('/new',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const { userId, title, content } = req.body
        const validationErrors = validationResult(req)

        if (validationErrors.isEmpty()) {
            const story = await Story.create({
                userId,
                title,
                content
            })
            res.redirect('/')
        } else {
            const errors = validationErrors.array().map(error => error.msg)
            console.log(errors)
            res.redirect('/new-story')
        }
    })
);

// Edit a story
router.post('/edit/:id(\\d+)',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const { title, content } = req.body
        const { id } = req.params
        const story = await Story.findByPk(id)

        story.title = title
        story.content = content
        await story.save()
        res.redirect('/')
    })
)

module.exports = router;
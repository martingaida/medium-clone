const express = require('express');
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const { Comment } = require('../../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();

// Create a comment
router.post('/new',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const { userId, storyId, content } = req.body
        const validationErrors = validationResult(req)
        
        if (validationErrors.isEmpty()) {
            const comment = await Comment.create({
                userId,
                storyId,
                content
            })
            // res.redirect(`/story/${storyId}`)
            res.redirect('/')
        } else {
            const errors = validationErrors.array().map(error => error.msg)
            console.log(errors)
            // res.redirect('/comments/new')
        }
    })
);

// Fetch all comments
router.get('/',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const comments = await Comment.findAll({
            include: ['User', 'Story'],
            order: [['createdAt', 'DESC']]
        });

        return res.json({ comments })
    })
);

module.exports = router;
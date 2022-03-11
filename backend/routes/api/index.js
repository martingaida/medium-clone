const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const storiesRouter = require('./stories');
const commentsRouter = require('./comments');

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/stories', storiesRouter);
router.use('/comments', commentsRouter)

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'DemoLitionMan'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));

router.get(
    '/restore-user', 
    restoreUser, 
    (req, res) => {
        return res.json(req.user);
    }
);

router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;
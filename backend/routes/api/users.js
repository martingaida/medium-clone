const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);

module.exports = router;

/*
DELETE after user testing:
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `1hbyFfZQ-8yuuqU8ivFPUw-2y4VnTlxivp34`
  },
  body: JSON.stringify({
    email: 'liquidBator@drop.io',
    username: 'LiquidA',
    password: '1234'
  })
}).then(res => res.json()).then(data => console.log(data));
*/
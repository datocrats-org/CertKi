const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Yep, got here!");
})

module.exports = router;
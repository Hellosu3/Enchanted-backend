const router = require("express").Router()
const messageRoute = require("./messageRoutes")


router.use('/message', messageRoute);

module.exports = router
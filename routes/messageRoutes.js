const router = require('express').Router()
const { messageCtrl } = require('../controllers')



//Routes
router.get('/', messageCtrl.getMessage)
router.post('/', messageCtrl.createMessage)
router.put('/:id', messageCtrl.updateMessage)
router.delete('/:id', messageCtrl.deleteMessage)



module.exports = router;
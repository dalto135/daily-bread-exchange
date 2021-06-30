const router = require("express").Router();
const { User } = require('../../models');

// const userPage = require("../../controller/foodExchangeController")

//Retrieve information of all Users
router.get('/', (req, res) => {
   User.find({})
   .then(user => {
     res.json(user);
   })
   .catch(err => {
     res.status(404).json(err.message);
   })
})

//Make a new User
router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(404).json(err.message);
    })
 })

//Delete User by id
router.delete('/:id', (req, res) => {
    User.remove({_id: req.params.id},
        function(err, result) {
            if (err) {
                res.send(err.message);
            } else {
                res.json(result);
            }
        }
    )
})

module.exports = router;
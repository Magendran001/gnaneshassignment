const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { _id: req.params.id } : {};

  User
    .find(filter)
    .then(users => res.json(users))
    .catch(next);
});

router.post('/', async (req, res, next) => {

  try {
    console.log(req.body)

    let user = await User.findOne({ email: req.body.email });

    if (!user) {

      return res.status(400).send({ message: "Kindly Regeister First" })

    }

    if (user.password != req.body.password)
      return res.status(400).send({ message: "Invalid Password" })

    console.log(user)
    return res.send({ user })

  } catch (error) {

    return res.send({ error })
  }
});


router.post('/', async (req, res, next) => {

  try {
    console.log(req.body)

    let user = await User.create(req.body);
    return res.send({ user })

  } catch (error) {

    return res.send({ error })
  }
});

router.put('/:id', function (req, res, next) {
  User
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, result) => res.json(result))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  User
    .findOneAndRemove({ _id: req.params.id })
    .then(user => res.json(`User '${user.firstName}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;
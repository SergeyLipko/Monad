import express from 'express';


export const userRoutes = model => {

  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      model.find((err, user) => {
        res.json(user);
      });
    })

    // TODO add handler if email already in use
    .post((req, res) => {
      const user = new model(req.body);
      user.save(err => {
        if(!err) {
          res.json({ message: 'User created', user });
        } else {
          res.json({ message: 'User not created', err });
        }
      });
    });


  router.route('/:user_id')
    .get((req, res) => {
      model.findById(req.params.user_id, (err, user) => {
        !err ? res.json(user) : res.json(err);
      });
    })

    .delete((req, res) => {
      model.remove({
        _id: req.params.user_id
      }, () => { res.json({message: 'User deleted' });
      })
    });


    return router;
};
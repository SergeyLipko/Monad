import express from 'express';



export const designersRoutes = model => {

  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      model.find((err, designers) => {
        res.json(designers);
      });
    })

    .post((req, res) => {
      const designer = new model(req.body);
      designer.save(err => {
        if(err){
          res.json({ message: 'Designer _not_ created', err});
        } else {
          res.json({ message: 'Designer created', designer});
        }
      });
    });


  router.route('/:designer_id')
    .get((req, res) => {
      model.findById(req.params.designer_id, (err, designer) => {
        !err ? res.json(designer) : res.json(err);
      });
    })

    .delete((req, res) => {
      model.remove({
        _id: req.params.designer_id
      }, () => { res.json({message: 'Designer deleted' });
      })
    })

    .patch((req, res) => {
      model.findById(req.params.designer_id, (err, designer) => {
        if (err) res.send(err);
        designer.designerName = req.body.designerName;
        designer.contacts = req.body.designerContacts;
        designer.location = req.body.location;
        designer.comment = req.body.comment;

        designer.save(err => {
          if(err){
            res.json({ message: err});
          } else {
            res.json({ message: 'Designer updated'});
          }
        });
      });
    });

  return router;

};
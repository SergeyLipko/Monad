import express from 'express';



export const productsRoutes = model => {

  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      model.find((err, products) => {
        res.json(products);
      });
    })

    .post((req, res) => {
      const product = new model(req.body);

      product.save(err => {
        if(err){
          res.json({ message: 'Product _not_ created', err});
        } else {
          res.json({ message: 'Product created', product});
        }
      });
    });


  router.route('/:product_id')
    .get((req, res) => {
      model.findById(req.params.product_id, (err, product) => {
        !err ? res.json(product) : res.json(err);
      });
    })

    .delete((req, res) => {
      model.remove({
        _id: req.params.product_id
      }, () => { res.json({message: 'Product deleted' });
      })
    });


  router.route('/designer_products/:designer_id')
    .get((req, res) => {
      model.find({designerId: req.params.designer_id}, (err, products) => {
        !err ? res.json(products) : res.json(err);
      });
    });


  router.route('/products_in_stock')
    .get((req, res) => {
      model.find({isInStock: true}, (err, products) => {
        !err ? res.json(products) : res.json(err);
      });
    });

  return router;

};
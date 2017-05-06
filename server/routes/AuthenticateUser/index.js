import express from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../../../config/config.js';

export const authenticateUserRoutes = model => {

  const router = express.Router();
  const app = express();
  app.set('superSecret', secret);

  router.route('/authenticate')

    .post((req, res) => {
      model.find({ login: req.body.login }, (err, user) => {
        if(err) {
          console.log('Error in initial phase');
        }

        const _user = user[0];

        try{
          if (!_user) {
            res.json({
              success: false,
              errorMessage: 'Authentication failed. User not found.'
            });
            throw 'user not found';

          } else if (_user) {
            if(_user.password !== req.body.password){
              res.json({
                success: false,
                errorMessage: 'Authentication failed. Wrong password.'
              });
              throw 'wrong password';

            } else {
              let token = jwt.sign(_user, app.get('superSecret'), {
                expiresIn: 1440
              });

              res.json({
                success: true,
                isAuthentication: true,
                userId: _user._id,
                userLogin: _user.login,
                token: token
              });
            }
          }
        } catch(err){
          console.log('Authentication error :', err);
        }
      });
    });

     return router;
};
